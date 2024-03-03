package com.stepup.user.service;

import com.stepup.user.dto.SigninDTO;
import com.stepup.user.dto.UserAddressDTO;
import com.stepup.user.dto.UserDTO;
import com.stepup.user.response.LoginResponse;
import org.springframework.stereotype.Service;

public interface UserService {

    String addUser(UserDTO userDTO, UserAddressDTO userAddressDTO);

    LoginResponse loginEmployee(SigninDTO signinDTO);

    UserDTO userById(int user_id);
}

