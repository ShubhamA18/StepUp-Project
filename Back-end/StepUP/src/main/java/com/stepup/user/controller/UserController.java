package com.stepup.user.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stepup.user.dto.SigninDTO;
import com.stepup.user.dto.UserAddressDTO;
import com.stepup.user.dto.UserDTO;
import com.stepup.user.response.LoginResponse;
import com.stepup.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserService userService;

//    @PostMapping("addUser")
//    public String addUser(@RequestBody UserDTO userDTO, UserAddressDTO userAddressDTO)
//    {
//        String id=userService.addUser(userDTO,userAddressDTO);
//        return id;
//    }

    @PostMapping("addUser")
    public String addUser(@RequestBody Map<String, Object> requestPayload) {
        ObjectMapper objectMapper = new ObjectMapper(); // You may need to inject this or instantiate it differently
        UserDTO userDTO = objectMapper.convertValue(requestPayload.get("user"), UserDTO.class);
        UserAddressDTO userAddressDTO = objectMapper.convertValue(requestPayload.get("userAddress"), UserAddressDTO.class);

        String name = userService.addUser(userDTO, userAddressDTO);
        return name;
    }


    @PostMapping("login")
    public ResponseEntity<?> loginEmployee(@RequestBody SigninDTO signinDTO)
    {
        LoginResponse loginResponse = userService.loginEmployee(signinDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("getById/{user_id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("user_id") int user_id){
        UserDTO user = userService.userById(user_id);
        return  new ResponseEntity<>(user, HttpStatus.OK);

    }

}

