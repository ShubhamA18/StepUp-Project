package com.stepup.product.mapper;

import com.stepup.product.dto.ColorDTO;
import com.stepup.product.dto.ProductDTO;
import com.stepup.product.dto.SizeDTO;
import com.stepup.product.model.*;

import java.util.List;
import java.util.stream.Collectors;

public class ProductMapper {

    public static ProductDTO mapToProductDTO(Product product){
//        List<SizeDTO> sizeDTOs = SizeMapper.mapToSizeDTO(product.getSizeId());
//        List<ColorDTO> colorDTOs = ColorMapper.mapToColorDTO(product.getColorId());
//        List<SizeDTO> sizeDTOs = product.getSizeId().stream()
//                .map(SizeMapper::mapToSizeDTO)
//                .collect(Collectors.toList());
//
//
//        List<ColorDTO> colorDTOs = product.getColorId().stream()
//                .map(ColorMapper::mapToColorDTO)
//                .collect(Collectors.toList());

//        List<ColorDTO> colorDTO=product.getColorId().stream().map((products)->ColorMapper.mapToColorDTO(products))
//                        .collect(Collectors.toList());

        return new ProductDTO(
                product.getProductId(),
                product.getProductName(),
                product.getBrand(),
                product.getQuantity(),
                product.getPrice(),
                product.getDiscountPercentage(),
                product.getDiscountPrice(),
                product.getImage(),
                product.getRating(),
                product.getStatus(),
                product.getDescriptionId(),
                product.getCategoryId()
        );
    }

    public static Product mapToProduct(ProductDTO productDTO){
//        List<Size> sizes = productDTO.getSizeId().stream()
//                .map(SizeMapper::mapToSize)
//                .collect(Collectors.toList());
////        product.setSizes(sizes);
//
//        List<Color> colors = productDTO.getColorId().stream()
//                .map(ColorMapper::mapToColor)
//                .collect(Collectors.toList());
//        List<ColorDTO> colorDTO=productDTO.getColorId().stream().map((products)->ColorMapper.mapToColor(products))
//                        .collect(Collectors.toList());
//        product.setColors(colors);

//        productDTO.setDescriptionId(descriptionId);
//        productDTO.setCategoryId(categoryId);
        return new Product(
                productDTO.getProductId(),
                productDTO.getProductName(),
                productDTO.getBrand(),
                productDTO.getQuantity(),
                productDTO.getPrice(),
                productDTO.getDiscountPercentage(),
                productDTO.getDiscountPrice(),
                productDTO.getImage(),
                productDTO.getRating(),
                productDTO.getStatus(),
                productDTO.getDescriptionId(),
                productDTO.getCategoryId()

        );
    }
}
