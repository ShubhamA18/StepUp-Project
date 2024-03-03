package com.stepup.product.service;

import com.stepup.product.dto.WashingDTO;

import com.stepup.product.mapper.WashingMapper;
import com.stepup.product.model.Washing;
import com.stepup.product.repository.WashingRepository;
import com.stepup.user.Exception.ResourceNotFound;
import com.stepup.user.model.User;
import com.stepup.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WashingServiceImpl implements WashingService{

    @Autowired
    WashingRepository washingRepository;
    @Autowired
    UserRepository userRepository;
    @Override
    public WashingDTO createWashOrder(WashingDTO washingDTO) {

        int id= washingDTO.getUserId();
        User user= userRepository.findById(id).orElseThrow(()->new ResourceNotFound("Id not found"));
        Washing washing =new Washing(
                washingDTO.getWash_id(),
                washingDTO.getShoeType(),
                washingDTO.getShoeMaterial(),
                washingDTO.getInstructions(),
                washingDTO.getOrderDate(),
                washingDTO.getReturnDate(),
                user
        );

        Washing savedWashOrder = washingRepository.save(washing);
        return WashingMapper.mapToWashingDTO(savedWashOrder);
    }
}
