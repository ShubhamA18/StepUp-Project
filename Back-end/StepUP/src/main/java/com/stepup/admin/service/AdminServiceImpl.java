package com.stepup.admin.service;

import com.stepup.admin.dto.AdminDTO;
import com.stepup.admin.mapper.AdminMapper;
import com.stepup.admin.model.Admin;
import com.stepup.admin.repository.AdminRepository;
import com.stepup.user.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;

    @Override
    public String addAdmin(AdminDTO adminDTO) {

        Admin admin= AdminMapper.mapToAdmin(adminDTO);
        adminRepository.save(admin);
//        AdminMapper.mapToAdminDto(admin);
        return admin.getAdminName();
    }

    @Override
    public LoginResponse loginAdmin(AdminDTO adminDTO) {
        String msg = "";
        Admin admin1 = adminRepository.findByAdminName(adminDTO.getAdminName());
        if (admin1 != null) {
            String passwordFromAdmin = adminDTO.getAdminPassword();
            String passwordFromDatabase = admin1.getAdminPassword();

            if (passwordFromAdmin.equals(passwordFromDatabase)) {
                Optional<Admin> admin = adminRepository.findOneByAdminNameAndAdminPassword(adminDTO.getAdminName(), passwordFromAdmin);
                if (admin.isPresent()) {
                    return new LoginResponse("Login Success", true,admin1.getId());
                } else {
                    return new LoginResponse("Login Failed", false,0);
                }
            } else {
                return new LoginResponse("password Not Match", false,0);
            }
        }else {
            return new LoginResponse("Name not exits", false,0);
        }
    }
}
