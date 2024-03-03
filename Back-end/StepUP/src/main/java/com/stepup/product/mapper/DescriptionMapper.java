package com.stepup.product.mapper;

import com.stepup.product.dto.DescriptionDTO;
import com.stepup.product.model.Description;

public class DescriptionMapper {

    public static DescriptionDTO mapToDescriptionDTO(Description description){
        return new DescriptionDTO(
                description.getdId(),
                description.getdMaterialType(),
                description.getdWaterResistance(),
                description.getdOrigin(),
                description.getdWeight(),
                description.getdDescription()
        );
    }

    public static Description mapToDescription(DescriptionDTO descriptionDTO){
        return new Description(
                descriptionDTO.getdId(),
                descriptionDTO.getdMaterialType(),
                descriptionDTO.getdWaterResistance(),
                descriptionDTO.getdOrigin(),
                descriptionDTO.getdWeight(),
                descriptionDTO.getdDescription()
        );
    }
}
