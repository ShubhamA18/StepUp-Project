package com.stepup.order.controller;

import com.stepup.cart.model.Cart;
import com.stepup.order.model.Order;
import com.stepup.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("getOrder")
    public List<Order> getOrder(){
        return orderService.getAllOrder();
    }

    @PostMapping("addOrder")
    public String addOrder(@RequestBody Order order){
        orderService.addOrder(order);
        return "Order Added";
    }
}
