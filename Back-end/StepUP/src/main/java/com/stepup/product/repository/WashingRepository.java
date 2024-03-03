package com.stepup.product.repository;

import com.stepup.product.model.Washing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WashingRepository extends JpaRepository<Washing,Integer> {
}
