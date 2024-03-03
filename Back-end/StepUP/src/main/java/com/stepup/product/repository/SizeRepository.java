package com.stepup.product.repository;

import com.stepup.product.model.Product;
import com.stepup.product.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SizeRepository extends JpaRepository<Size,Integer> {

    List<Size> findByProduct(Product product);
    void deleteByProduct(Product product);
}
