package com.stepup.cart.model;

import com.stepup.order.model.Order;
import com.stepup.product.model.Product;
import com.stepup.user.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private int cartId;

    @ManyToOne // corrected annotation
    @JoinColumn(name = "product_id") // Assuming this is the foreign key column
    private Product product;

    @OneToOne
    @JoinColumn(name="cart_user_id")
    private User cartUserId;

    private int cQuantity;

    @OneToOne(mappedBy = "cart")  // Update mappedBy to point to the field in Order class
    private Order order;

    public Cart(){}

    public Cart(int cartId, Product product, User cartUserId, int cQuantity, Order order) {
        this.cartId = cartId;
        this.product = product;
        this.cartUserId = cartUserId;
        this.cQuantity = cQuantity;
        this.order = order;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getCartUserId() {
        return cartUserId;
    }

    public void setCartUserId(User cartUserId) {
        this.cartUserId = cartUserId;
    }

    public int getcQuantity() {
        return cQuantity;
    }

    public void setcQuantity(int cQuantity) {
        this.cQuantity = cQuantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}


