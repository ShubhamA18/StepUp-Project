package com.stepup.product.repository;


import com.stepup.product.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CategoryRepository extends JpaRepository<Category,Integer> {

    List<Category> findByTopLevelCategory(String topLevelCategory);

}
