package com.stepup.admin.mapper;

import com.stepup.admin.dto.AdminDTO;
import com.stepup.admin.model.Admin;
import org.springframework.stereotype.Component;

@Component
public class AdminMapper {

    public static AdminDTO mapToAdminDto(Admin admin){
        return new AdminDTO(
                admin.getId(),
                admin.getAdminName(),
                admin.getAdminPassword()
        );
    }

    public static Admin mapToAdmin(AdminDTO adminDTO){
        return new Admin(
                adminDTO.getId(),
                adminDTO.getAdminName(),
                adminDTO.getAdminPassword()
        );
    }
}
