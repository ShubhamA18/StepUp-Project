package com.stepup.order.model;

import com.stepup.cart.model.Cart;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="order_id")
    private int orderId;

    @OneToOne
    @JoinColumn(name = "cart_id")  // Update JoinColumn to point to the field in Cart class
    private Cart cart;
    private String paymentMethod;
    private double totalAmount;
    private String orderStatus;
    private Date orderDate;
    private Date deliveryDate;

    public Order(){}

    public Order(int orderId, Cart cartId, String paymentMethod, double totalAmount, String orderStatus, Date orderDate, Date deliveryDate) {
        this.orderId = orderId;
        this.cart = cartId;
        this.paymentMethod = paymentMethod;
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public Cart getCartId() {
        return cart;
    }

    public void setCartId(Cart cartId) {
        this.cart = cartId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(Date deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
}
