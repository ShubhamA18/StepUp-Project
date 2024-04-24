package com.stepup.cart.service;

import com.stepup.cart.dto.CartDTO;
import com.stepup.cart.mapper.CartMapper;
import com.stepup.cart.model.Cart;
import com.stepup.cart.repository.CartRepository;
import com.stepup.product.model.Product;
import com.stepup.product.repository.ProductRepository;
import com.stepup.user.model.User;
import com.stepup.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CartServiceImpl implements CartService{

    @Autowired
    CartRepository cartRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public CartDTO addToCart(int productId, int userId) {
//        try {
//            Optional<Product> productOptional = productRepository.findById(productId);
//            Optional<User> userOptional = userRepository.findById(userId);
//
//            if (productOptional.isPresent() && userOptional.isPresent()) {
//                Product product = productOptional.get();
//                User user = userOptional.get();
//
//                Optional<Cart> existingUserOptional = cartRepository.findByUser(user);
//                Optional<Cart> existingProductOptional = cartRepository.findByProduct(product);
//                if (existingUserOptional.isPresent() && existingProductOptional.isPresent()) {
//                    Cart existingCart = existingUserOptional.get();
//                    int quantity = existingCart.getcQuantity();
//                    existingCart.setcQuantity(quantity + 1);
////                    cartRepository.save(existingCart);
//                    return CartMapper.mapToCartDTO(existingCart);
//                } else if (existingUserOptional.isPresent() && existingProductOptional.isEmpty()) {
//                    Cart existingCart = existingUserOptional.get();
//                    existingCart.setProduct(product);
//                    int quantity = existingCart.getcQuantity();
//                    existingCart.setcQuantity(quantity + 1);
////                    cartRepository.save(existingCart);
//                    return CartMapper.mapToCartDTO(existingCart);
//                } else {
//                    Cart newCart = new Cart();
//                    newCart.setProduct(product);
//                    newCart.setUser(user);
//                    newCart.setcQuantity(1);
//                    cartRepository.save(newCart);
//                    return CartMapper.mapToCartDTO(newCart);
//                }
//            } else {
//                return null;
//            }
//        } catch (Exception e) {
//            // Log the exception for troubleshooting
//            e.printStackTrace();
//            throw new RuntimeException("Error adding to cart: " + e.getMessage());
//        }
        return null;
    }

    @Override
    public List<Cart> getAllCart() {
        return cartRepository.findAll();
    }
}
