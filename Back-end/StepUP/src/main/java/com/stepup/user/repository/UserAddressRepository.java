package com.stepup.user.repository;

import com.stepup.user.model.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository
public interface UserAddressRepository extends JpaRepository<UserAddress,Integer> {

}
