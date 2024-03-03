package com.stepup.admin.repository;


import com.stepup.admin.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

    Admin findByAdminName(String adminName);

    Optional<Admin> findOneByAdminNameAndAdminPassword(String adminName, String password);
}
