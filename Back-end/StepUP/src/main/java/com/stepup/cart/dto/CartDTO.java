package com.stepup.cart.dto;

import com.stepup.product.dto.ProductDTO;
import com.stepup.user.dto.UserDTO;

public class CartDTO {
    private int cartId;
    private ProductDTO product;
    private UserDTO user;
    private int cQuantity;
    public CartDTO() {
    }

    public CartDTO(int cartId, ProductDTO product, UserDTO  user, int cQuantity) {
        this.cartId = cartId;
        this.product = product;
        this.user = user;
        this.cQuantity = cQuantity;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public int getcQuantity() {
        return cQuantity;
    }

    public void setcQuantity(int cQuantity) {
        this.cQuantity = cQuantity;
    }

    @Override
    public String toString() {
        return "CartDTO{" +
                "cartId=" + cartId +
                ", product=" + product +
                ", user=" + user +
                ", cQuantity=" + cQuantity +
                '}';
    }
}
