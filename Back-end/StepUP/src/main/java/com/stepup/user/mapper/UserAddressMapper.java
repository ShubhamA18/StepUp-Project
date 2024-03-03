package com.stepup.user.mapper;

import com.stepup.user.dto.UserAddressDTO;
import com.stepup.user.model.User;
import com.stepup.user.model.UserAddress;
import org.springframework.stereotype.Component;

@Component
public class UserAddressMapper {

    public static UserAddressDTO mapToUserAddressDTO(UserAddress userAddress){
        return new UserAddressDTO(
                userAddress.getAddressId(),
                userAddress.getAddress(),
                userAddress.getArea(),
                userAddress.getCity(),
                userAddress.getState(),
                userAddress.getPincode(),
                userAddress.getUserId()
        );
    }

    public static UserAddress mapToUserAddress(UserAddressDTO userAddressDTO, User userId){
        userAddressDTO.setUserId(userId);
        return new UserAddress(
                userAddressDTO.getAddressId(),
                userAddressDTO.getAddress(),
                userAddressDTO.getArea(),
                userAddressDTO.getCity(),
                userAddressDTO.getState(),
                userAddressDTO.getPincode(),
                userAddressDTO.getUserId()
        );
    }

}
