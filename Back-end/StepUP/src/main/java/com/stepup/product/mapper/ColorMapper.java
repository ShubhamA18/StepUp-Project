package com.stepup.product.mapper;

import com.stepup.product.dto.ColorDTO;
import com.stepup.product.model.Color;
import com.stepup.product.model.Product;

public class ColorMapper {

    public static ColorDTO mapToColorDTO(Color color){
        return new ColorDTO(
                color.getColorId(),
                color.getColorName()
        );
    }

    public static Color mapToColor(ColorDTO colorDTO){
        //colorDTO.setProduct(product);
        return new Color(
                colorDTO.getColorId(),
                colorDTO.getColorName()
//                colorDTO.getProduct()

        );
    }
}
