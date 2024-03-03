package com.stepup.product.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stepup.product.dto.*;
import com.stepup.product.model.Product;
import com.stepup.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/product")
public class ProductController {

    @Autowired
    ProductService productService;

    // //   @PostMapping(value="addProduct",consumes= MediaType.MULTIPART_FORM_DATA_VALUE)
    @PostMapping("addProduct")
// //   public String addProduct(@RequestBody Map<String, Object> requestPayload,@RequestPart("productImage") MultipartFile productImage) throws IOException {

    public ProductDTO addProduct(@RequestBody Map<String, Object> requestPayload)  {

        ObjectMapper objectMapper = new ObjectMapper(); // You may need to inject this or instantiate it differently
        ProductDTO productDTO = objectMapper.convertValue(requestPayload.get("products"), ProductDTO.class);
        DescriptionDTO descriptionDTO = objectMapper.convertValue(requestPayload.get("descriptions"), DescriptionDTO.class);
        CategoryDTO categoryDTO = objectMapper.convertValue(requestPayload.get("category"), CategoryDTO.class);
        List<SizeDTO> sizeDTO = objectMapper.convertValue((List<?>) requestPayload.get("sizes"), new TypeReference<List<SizeDTO>>() {});
        List<ColorDTO> colorDTO = objectMapper.convertValue((List<?>) requestPayload.get("colors"), new TypeReference<List<ColorDTO>>() {});


//        List<Map<String, Object>> sizeMaps = (List<Map<String, Object>>) requestPayload.get("sizes");
//        List<Map<String, Object>> colorMaps = (List<Map<String, Object>>) requestPayload.get("colors");
//
//        List<SizeDTO> sizeDTO = sizeMaps != null ? sizeMaps.stream()
//                .map(sizeMap -> objectMapper.convertValue(sizeMap, SizeDTO.class))
//                .collect(Collectors.toList()) : null;
//
//        List<ColorDTO> colorDTO = colorMaps != null ? colorMaps.stream()
//                .map(colorMap -> objectMapper.convertValue(colorMap, ColorDTO.class))
//                .collect(Collectors.toList()) : null;

        ProductDTO productDTO1 = productService.addProduct(productDTO, descriptionDTO, categoryDTO,  sizeDTO,  colorDTO);
        return productDTO1;
    }

    @GetMapping("getAllProduct")
    public ResponseEntity<List<Product>> getAllProduct() {
        List<Product> getProduct=productService.getAllProduct();

        return new ResponseEntity<>(getProduct, HttpStatus.OK);
    }

    @GetMapping("status/{status}")
    public ResponseEntity<List<Product>> getProductsByStatus(@PathVariable String status) {
        List<Product> productsByStatus = productService.getByStatus(status);
        return new ResponseEntity<>(productsByStatus, HttpStatus.OK);
    }

    @GetMapping("search/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable("name") String name){
        if(name==null || name.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {
            List<Product> productsByName = productService.searchByName(name);
//            if (productsByName.size() == 1 && productsByName.get(0).getProductName().startsWith("No product found")) {
//                // Return a 404 status code to indicate not found
//                    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            }
            return new ResponseEntity<>(productsByName, HttpStatus.OK);
        }
    }

    @GetMapping("TopCategory/{name}")
    public ResponseEntity<Optional<Product>> getProductByTopCategory(String name){
        if(name==null || name.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {
            Optional<Product> productsByName = productService.searchByTopCategory(name);
//            if (productsByName.stream().count() == 1 && productsByName.get(0).getProductName().startsWith("No product found")) {
//                // Return a 404 status code to indicate not found
//                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            }
            return new ResponseEntity<>(productsByName, HttpStatus.OK);
        }
    }

    @DeleteMapping("delete/{id}")
    public String deleteProductById(@PathVariable("id") int id){
        return productService.deleteProduct(id);
    }

}

