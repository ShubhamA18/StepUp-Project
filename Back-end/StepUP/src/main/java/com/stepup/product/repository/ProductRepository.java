package com.stepup.product.repository;

import com.stepup.product.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    List<Product> findByProductNameContaining(String productName);

//    Product findById(int id);
    @Query("SELECT DISTINCT p FROM Product p " +
            "LEFT JOIN FETCH p.sizeId sizes " +
            "LEFT JOIN FETCH p.colorId colors")
    List<Product> findAllWithDetails();

    List<Product> findByStatus(String status, Pageable pageable);

}