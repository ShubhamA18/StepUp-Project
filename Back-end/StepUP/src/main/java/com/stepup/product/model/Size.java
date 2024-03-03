package com.stepup.product.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity

public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sizeId;
    private int sizeType;
    private int sizeQuantity;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "size_product_id")
    private Product product;

    public Size() {
    }

    public Size(int sizeId, int sizeType, int sizeQuantity) {
        this.sizeId = sizeId;
        this.sizeType = sizeType;
        this.sizeQuantity = sizeQuantity;
    }

    public int getSizeId() {
        return sizeId;
    }

    public void setSizeId(int sizeId) {
        this.sizeId = sizeId;
    }

    public int getSizeType() {
        return sizeType;
    }

    public void setSizeType(int sizeType) {
        this.sizeType = sizeType;
    }

    public int getSizeQuantity() {
        return sizeQuantity;
    }

    public void setSizeQuantity(int sizeQuantity) {
        this.sizeQuantity = sizeQuantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "Size{" +
                "sizeId=" + sizeId +
                ", sizeType=" + sizeType +
                ", sizeQuantity=" + sizeQuantity +
                ", product=" + product +
                '}';
    }
}
