package com.stepup.cart.mapper;

import com.stepup.cart.dto.CartDTO;
import com.stepup.cart.model.Cart;
import com.stepup.product.mapper.ProductMapper;
import com.stepup.user.mapper.UserMapper;

public class CartMapper {

//    static UserMapper userMapper = new UserMapper();
//    public static CartDTO mapToCartDTO(Cart cart){
//        CartDTO cartDTO=new CartDTO();
//
//        cartDTO.setCartId(cart.getCartId());
//        cartDTO.setProduct(ProductMapper.mapToProductDTO(cart.getProduct()));
//        cartDTO.setUser(userMapper.mapTOUserDTO(cart.getUsers()));
//        cartDTO.setcQuantity(cart.getcQuantity());
//
//        return cartDTO;
//    }
//
//    public static Cart mapToCart(CartDTO cartDTO){
//        Cart cart=new Cart();
//
//        cart.setCartId(cartDTO.getCartId());
//        cart.setProduct(ProductMapper.mapToProduct(cartDTO.getProduct()));
//        cart.setUser(userMapper.mapToUser(cartDTO.getUser()));
//        cart.setcQuantity(cartDTO.getcQuantity());
//        return cart;
//    }
}
