package com.stepup.product.model;

import com.stepup.user.model.User;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Washing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int wash_id;
    private String shoeType;
    private String shoeMaterial;
    private String instructions;
    private Date orderDate;
    private Date returnDate;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User userId;

    public Washing() {
    }

    public Washing(int wash_id, String shoeType, String shoeMaterial, String instructions, Date orderDate, Date returnDate, User userId) {
        this.wash_id = wash_id;
        this.shoeType = shoeType;
        this.shoeMaterial = shoeMaterial;
        this.instructions = instructions;
        this.orderDate = orderDate;
        this.returnDate = returnDate;
        this.userId = userId;
    }

    public int getWash_id() {
        return wash_id;
    }

    public void setWash_id(int wash_id) {
        this.wash_id = wash_id;
    }

    public String getShoeType() {
        return shoeType;
    }

    public void setShoeType(String shoeType) {
        this.shoeType = shoeType;
    }

    public String getShoeMaterial() {
        return shoeMaterial;
    }

    public void setShoeMaterial(String shoeMaterial) {
        this.shoeMaterial = shoeMaterial;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public int getUserId() {
        return userId.getId();
    }

    public void setUserId(int userId) {
        this.userId = new User();
        this.userId.setId(userId);
    }

    @Override
    public String toString() {
        return "Washing{" +
                "wash_id=" + wash_id +
                ", shoeType='" + shoeType + '\'' +
                ", shoeMaterial='" + shoeMaterial + '\'' +
                ", instructions='" + instructions + '\'' +
                ", orderDate=" + orderDate +
                ", returnDate=" + returnDate +
                ", user=" + userId +
                '}';
    }
}
