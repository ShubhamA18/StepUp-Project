package com.stepup.admin.controller;

import com.stepup.admin.dto.AdminDTO;
import com.stepup.admin.service.AdminService;
import com.stepup.user.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("addAdmin")
    public String addAdmin(@RequestBody AdminDTO adminDTO)
    {
        String id=adminService.addAdmin(adminDTO);
        return id;
    }

    @PostMapping("adminSignin")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminDTO adminDTO)
    {
        LoginResponse loginResponse = adminService.loginAdmin(adminDTO);
        return ResponseEntity.ok(loginResponse);
    }


//    @GetMapping("allAdmin")
//    public List<Admin> getAllAdmin() {
//        return adminService.getAllAdmin();
//    }
//
//    @GetMapping("checkAdmin/{adminName}")
//    public List<Admin> checkAdmin(@PathVariable String adminName)
//    {
//        return adminService.checkAdmin(adminName);
//    }
//
//    @PostMapping("/addAdmin")
//    public String add(@RequestBody Admin admin)
//    {
//        adminService.addAdmin (admin);
//        return "new Admin Added";
//    }
}
