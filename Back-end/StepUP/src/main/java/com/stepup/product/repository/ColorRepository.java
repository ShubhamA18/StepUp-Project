package com.stepup.product.repository;

import com.stepup.product.model.Color;
import com.stepup.product.model.Product;
import com.stepup.product.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ColorRepository extends JpaRepository<Color,Integer> {

    List<Color> findByProduct(Product product);

    void deleteByProduct(Product product);
}
