package com.stepup.product.mapper;

import com.stepup.product.dto.SizeDTO;
import com.stepup.product.model.Product;
import com.stepup.product.model.Size;

public class SizeMapper {

    public static SizeDTO mapToSizeDTO(Size size){
        return new SizeDTO(
                size.getSizeId(),
                size.getSizeType(),
                size.getSizeQuantity()

        );
    }

    public static Size mapToSize(SizeDTO sizeDTO){
        //sizeDTO.setProduct(product);
        return new Size(
                sizeDTO.getSizeId(),
                sizeDTO.getSizeType(),
                sizeDTO.getSizeQuantity()
        );
    }
}
