package com.stepup.product.controller;

import com.stepup.product.dto.WashingDTO;
import com.stepup.product.service.WashingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/washing")
public class WashingController {

    @Autowired
    WashingService washingService;
    @PostMapping("addWashOrder")
    public WashingDTO addCustomer(@RequestBody WashingDTO washingDTO){
        System.out.println(washingDTO);
        WashingDTO addWashOrder= washingService.createWashOrder(washingDTO);
        return addWashOrder;
    }
}
