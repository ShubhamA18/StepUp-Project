package com.stepup.product.mapper;

import com.stepup.product.dto.CategoryDTO;
import com.stepup.product.model.Category;

public class CategoryMapper {

    public static CategoryDTO mapToCategoryDTO(Category category){
        return new CategoryDTO(
                category.getCategoryId(),
                category.getTopLevelCategory(),
                category.getSecondLevelCategory(),
                category.getThirdLevelCategory()
        );
    }

    public static Category mapToCategory(CategoryDTO categoryDTO){
        return new Category(
                categoryDTO.getCategoryId(),
                categoryDTO.getTopLevelCategory(),
                categoryDTO.getSecondLevelCategory(),
                categoryDTO.getThirdLevelCategory()
        );
    }
}
