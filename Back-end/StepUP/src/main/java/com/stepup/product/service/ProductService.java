package com.stepup.product.service;

import com.stepup.product.dto.*;
import com.stepup.product.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {


    ProductDTO addProduct(ProductDTO productDTO, DescriptionDTO descriptionDTO, CategoryDTO categoryDTO,  List<SizeDTO> sizeDTOList,
                          List<ColorDTO> colorDTO);

    List<Product> getAllProduct();

    List<Product> getByStatus(String status);

    List<Product> searchByName(String name);
    Optional<Product> searchByTopCategory(String TopCategory);

    String deleteProduct(int id);



//    ProductDTO createProduct(ProductDTO productDTO);
}
