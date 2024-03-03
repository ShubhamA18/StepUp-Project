package com.stepup.product.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.stepup.cart.model.Cart;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;
import java.util.Set;

@Entity
@Table(name="products")
@JsonIgnoreProperties({"sizeId", "colorId"})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String brand;
    private int quantity;
    private double price;
    private int discountPercentage;
    private double discountPrice;
    //    @Lob
//    private byte[] image;
    private String image;
    private double rating;
    private String status;
    @OneToOne
    @JoinColumn(name="description_id")
    private Description descriptionId;

    @OneToOne
    @JoinColumn(name="category_id")
    private Category categoryId;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    private Set<Size> sizeId;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    private Set<Color> colorId;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    private List<Cart> cart;

    public Product(){ }

    public Product(int productId, String productName, String brand, int quantity, double price, int discountPercentage, double discountPrice, String image, double rating, String status, Description descriptionId, Category categoryId, Set<Size> sizeId, Set<Color> colorId) {
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
        this.sizeId = sizeId;
        this.colorId = colorId;
    }

    public Product(int productId, String productName, String brand, int quantity, double price, int discountPercentage, double discountPrice, String image, double rating, String status, Description descriptionId, Category categoryId) {
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

    public Product(String s) {
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

    public Set<Size> getSizeId() {
        return sizeId;
    }

    public void setSizeId(Set<Size> sizeId) {
        this.sizeId = sizeId;
    }

    public Set<Color> getColorId() {
        return colorId;
    }

    public void setColorId(Set<Color> colorId) {
        this.colorId = colorId;
    }

    public List<Cart> getCart() {
        return cart;
    }

    public void setCart(List<Cart> cart) {
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "Product{" +
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
                ", sizeId=" + sizeId +
                ", colorId=" + colorId +
                '}';
    }
}