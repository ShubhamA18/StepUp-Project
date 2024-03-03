package com.stepup.product.dto;

import com.stepup.product.model.Category;
import com.stepup.product.model.Description;

import java.util.Arrays;
import java.util.List;

public class ProductDTO {

    private int productId;
    private String productName;
    private String brand;
    private int quantity;
    private double price;
    private int discountPercentage;
    private double discountPrice;
    private String image;
    private double rating;
    private String status;
    private Description descriptionId;
    private Category categoryId;


    public ProductDTO() {
    }

    public ProductDTO(int productId, String productName, String brand, int quantity, double price, int discountPercentage, double discountPrice, String image, double rating, String status, Description descriptionId, Category categoryId) {
        this.productId = productId;
        this.productName = productName;
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.discountPrice = discountPrice;
        this.image = image;
        this.rating = rating;
        this.status = status;
        this.descriptionId = descriptionId;
        this.categoryId = categoryId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(int discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public double getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(double discountPrice) {
        this.discountPrice = discountPrice;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Description getDescriptionId() {
        return descriptionId;
    }

    public void setDescriptionId(Description descriptionId) {
        this.descriptionId = descriptionId;
    }

    public Category getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }


    @Override
    public String toString() {
        return "ProductDTO{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", brand='" + brand + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", discountPercentage=" + discountPercentage +
                ", discountPrice=" + discountPrice +
                ", image='" + image + '\'' +
                ", rating=" + rating +
                ", status='" + status + '\'' +
                ", descriptionId=" + descriptionId +
                ", categoryId=" + categoryId +
                '}';
    }
}
