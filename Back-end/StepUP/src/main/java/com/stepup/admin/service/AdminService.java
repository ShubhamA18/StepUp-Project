package com.stepup.admin.service;

import com.stepup.admin.dto.AdminDTO;
import com.stepup.user.response.LoginResponse;

public interface AdminService {

    String addAdmin(AdminDTO adminDTO);


    LoginResponse loginAdmin(AdminDTO adminDTO);
}
