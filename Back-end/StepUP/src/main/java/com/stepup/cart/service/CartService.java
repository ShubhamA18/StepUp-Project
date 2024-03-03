package com.stepup.cart.service;

import com.stepup.cart.model.Cart;
import com.stepup.cart.repository.CartRepository;
import com.stepup.product.repository.ProductRepository;
import com.stepup.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;

    public Cart addCart(Cart cart){
        return cartRepository.save(cart);}

    public List<Cart> getAllCart(){
        return cartRepository.findAll();
    }

}
