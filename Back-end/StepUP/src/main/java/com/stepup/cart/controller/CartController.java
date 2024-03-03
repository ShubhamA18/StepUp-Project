package com.stepup.cart.controller;

import com.stepup.cart.model.Cart;
import com.stepup.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("getCart")
    public List<Cart> getCart(){
        return cartService.getAllCart();
    }

    @PostMapping("addCart")
    public String addCart(@RequestBody Cart cart){
        cartService.addCart(cart);
        return "Cart Added";
    }

}

