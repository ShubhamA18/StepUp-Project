package com.stepup.user.service;

import com.stepup.user.Exception.ResourceNotFound;
import com.stepup.user.dto.SigninDTO;
import com.stepup.user.dto.UserAddressDTO;
import com.stepup.user.dto.UserDTO;
import com.stepup.user.mapper.UserAddressMapper;
import com.stepup.user.mapper.UserMapper;
import com.stepup.user.model.User;
import com.stepup.user.model.UserAddress;
import com.stepup.user.repository.UserAddressRepository;
import com.stepup.user.repository.UserRepository;
import com.stepup.user.response.LoginResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserAddressRepository userAddressRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserAddressMapper userAddressMapper;

    @Override
    public String addUser(UserDTO userDTO, UserAddressDTO userAddressDTO) {

        if (userDTO.getPassword() == null || userDTO.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password cannot be null or empty");
        }
        User user1 = userRepository.findByEmail(userDTO.getEmail());
        if(user1==null)
        {
//            System.out.println(userDTO.getFirstName());
//            System.out.println(userDTO.getLastName());

            User user= userMapper.mapToUser(userDTO);
            User userIdReturned=userRepository.save(user);

            UserAddress userAddress=UserAddressMapper.mapToUserAddress(userAddressDTO,userIdReturned);
            userAddressRepository.save(userAddress);

            String firstName=user.getFirstName();
            String lastName=user.getLastName();

            return firstName+" "+lastName;
        }
        else {
            return "email exist";
        }

    }

    @Override
    public LoginResponse loginEmployee(SigninDTO signinDTO) {
        String msg = "";
        User user1 = userRepository.findByEmail(signinDTO.getEmail());
        if (user1 != null) {
            String password = signinDTO.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(signinDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    System.out.println(user1.getId());
                    return new LoginResponse("Login Success", true,user1.getId());
                } else {
                    return new LoginResponse("Login Failed", false,0);
                }
            } else {
                return new LoginResponse("password Not Match", false,0);
            }
        }else {
            return new LoginResponse("Email not exits", false,0);
        }
    }

    @Override
    public UserDTO userById(int user_id) {
        User user = userRepository.findById(user_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        return userMapper.mapTOUserDTO(user);
    }

}
