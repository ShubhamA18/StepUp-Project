package com.stepup.product.mapper;

import com.stepup.product.dto.WashingDTO;
import com.stepup.product.model.Washing;

public class WashingMapper {

    public static WashingDTO mapToWashingDTO(Washing washing){
        return new WashingDTO(
                washing.getWash_id(),
                washing.getShoeType(),
                washing.getShoeMaterial(),
                washing.getInstructions(),
                washing.getOrderDate(),
                washing.getReturnDate(),
                washing.getUserId()
        );
    }

//    public static Washing mapToWashing(WashingDTO washingDTO){
//
//        return new Washing(
//                washingDTO.getWash_id(),
//                washingDTO.getShoeType(),
//                washingDTO.getShoeMaterial(),
//                washingDTO.getInstructions(),
//                washingDTO.getOrderDate(),
//                washingDTO.getReturnDate(),
//
//        );
//    }
}
