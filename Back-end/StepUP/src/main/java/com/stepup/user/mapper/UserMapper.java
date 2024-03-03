package com.stepup.user.mapper;

import com.stepup.user.dto.UserDTO;
import com.stepup.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;
    public UserDTO mapTOUserDTO(User user){
        return new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getPhoneNo(),
                user.getGender()
        );
    }

    public User mapToUser(UserDTO userDTO){
        return new User(
                userDTO.getId(),
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
//                userDTO.getPassword(),
                userDTO.getPhoneNo(),
                userDTO.getGender()
        );
    }
}
