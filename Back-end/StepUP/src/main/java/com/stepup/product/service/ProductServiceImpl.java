package com.stepup.product.service;

import com.stepup.product.dto.*;
import com.stepup.product.mapper.*;
import com.stepup.product.model.*;
import com.stepup.product.repository.*;
import com.stepup.user.Exception.ResourceNotFound;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository productRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    DescriptionRepository descriptionRepository;
    @Autowired
    SizeRepository sizeRepository;
    @Autowired
    ColorRepository colorRepository;

    @Autowired
    private EntityManager entityManager;

    @Autowired
    private TransactionTemplate transactionTemplate;
    @Override
    public ProductDTO addProduct(ProductDTO productDTO, DescriptionDTO descriptionDTO, CategoryDTO categoryDTO,  List<SizeDTO> sizeDTO,
                                 List<ColorDTO> colorDTO) {
//        Product product1= productRepository.findByProductName(productDTO.getProductName());
//        if(product1==null){

        //description
        Description description= DescriptionMapper.mapToDescription(descriptionDTO);
        Description savedDescriptionID =descriptionRepository.save(description);

        //category
        Category category= CategoryMapper.mapToCategory(categoryDTO);
        Category savedCategoryID =categoryRepository.save(category);

        //product
        Product product= ProductMapper.mapToProduct(productDTO);
        Product savedProductID=productRepository.save(product);
        savedProductID.setDescriptionId(savedDescriptionID);
        savedProductID.setCategoryId(savedCategoryID);


        //size mapper and saved
        for (SizeDTO sizedto : sizeDTO) {
            Size size= SizeMapper.mapToSize( sizedto);
            size.setProduct(savedProductID);
            sizeRepository.save(size);
        }

//        Size size= SizeMapper.mapToSize((SizeDTO) sizeDTO);
//        size.setProduct(savedProductID);
//        sizeRepository.save(size);

        //color mapper and saved

        for (ColorDTO ColorDto : colorDTO) {
            Color color= ColorMapper.mapToColor( ColorDto);
            color.setProduct(savedProductID);
            colorRepository.save(color);
        }
//        Color color= ColorMapper.mapToColor((ColorDTO) ColorDTO);
//        color.setProduct(savedProductID);
//        colorRepository.save(color);

        return ProductMapper.mapToProductDTO(savedProductID);
//        }
//        else {
//            return "Product Already Exist";
//        }
    }

    @Override
    public List<Product> getAllProduct() {
        List<Product> products = productRepository.findAllWithDetails();
        return products;

//        List<ProductDTO> productDTOs = new ArrayList<>();
//
//        for (Product product : products) {
//            List<Size> id=sizeRepository.findByProductId(product.getProductId());
//            product.setSizeId(id);
//            ProductDTO productDTO = ProductMapper.mapToProductDTO(product);
//            productDTOs.add(productDTO);
//        }

//        return products.stream()
//                .map(ProductMapper::mapToProductDTO)
//                .collect(Collectors.toList());
    }

    @Override
    public List<Product> getByStatus(String status) {
//        Pageable pageable = (Pageable) PageRequest.of(0, limit);
        List<Product> productStatus = productRepository.findByStatus(status,PageRequest.of(0,10));
        return productStatus;
    }

    @Override
    public List<Product> searchByName(String productName) {
        List<Product> productDetails=productRepository.findByProductNameContaining(productName);
//        if (productDetails.isEmpty()) {
//            // You can return a special indicator or message
//            // For example, create a Product with a specific message
//            productDetails.add(new Product("No product found with the keyword: " + productName));
//        }
        return productDetails;
    }

    public Optional<Product> searchByTopCategory(String TopCategory) {
        List<Category> category = categoryRepository.findByTopLevelCategory(TopCategory);

        Optional<Product> productDetails = null;
        for (Category categoryDetails : category) {
            System.out.println(categoryDetails.getProduct().getProductId());
            productDetails = productRepository.findById(categoryDetails.getProduct().getProductId());
        }
//        if (productDetails.isEmpty()) {
//            // You can return a special indicator or message
//            // For example, create a Product with a specific message
//            productDetails.add(new Product("No product found with the keyword: " + productName));
//        }
        return productDetails;
    }

    @Transactional
    @Override
    public String deleteProduct(int id) {
//        Product product = productRepository.findById(id).orElseThrow(()->new ResourceNotFound("Id not found"));
        Optional<Product> products=productRepository.findById(id);
        //        ProductDTO productDTO = ProductMapper.mapToProductDTO(product);


        if (products.isEmpty()) {
            return "No Product Found";
        }
//        if (products.isPresent()) {
//            return "Product Found";
//        }


        Product product = products.get();
        System.out.println(product.getProductId());
        List<Size> sizes=sizeRepository.findByProduct(product);
        for (Size size: sizes) {
            System.out.println(size.getSizeId());
            sizeRepository.delete(size);
        }

        List<Color> colors=colorRepository.findByProduct(product);
        for (Color color: colors) {
            System.out.println(color.getColorId());
            colorRepository.delete(color);
        }


        entityManager.flush();

        // Commit the transaction manually
        transactionTemplate.executeWithoutResult(status -> {
            // Delete the product itself
            productRepository.deleteById(id);
        });

        return "Product deleted successfully";
    }


}
