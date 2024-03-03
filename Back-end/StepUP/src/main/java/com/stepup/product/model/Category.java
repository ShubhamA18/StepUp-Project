package com.stepup.product.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id")
    private int categoryId;
    private String topLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;
    @JsonIgnore
    @OneToOne(mappedBy = "categoryId",cascade = CascadeType.ALL)
    private Product product;

    public Category(){}

    public Category(int categoryId, String topLevelCategory, String secondLevelCategory, String thirdLevelCategory) {
        this.categoryId = categoryId;
        this.topLevelCategory = topLevelCategory;
        this.secondLevelCategory = secondLevelCategory;
        this.thirdLevelCategory = thirdLevelCategory;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getTopLevelCategory() {
        return topLevelCategory;
    }

    public void setTopLevelCategory(String topLevelCategory) {
        this.topLevelCategory = topLevelCategory;
    }

    public String getSecondLevelCategory() {
        return secondLevelCategory;
    }

    public void setSecondLevelCategory(String secondLevelCategory) {
        this.secondLevelCategory = secondLevelCategory;
    }

    public String getThirdLevelCategory() {
        return thirdLevelCategory;
    }

    public void setThirdLevelCategory(String thirdLevelCategory) {
        this.thirdLevelCategory = thirdLevelCategory;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryId=" + categoryId +
                ", topLevelCategory='" + topLevelCategory + '\'' +
                ", secondLevelCategory='" + secondLevelCategory + '\'' +
                ", thirdLevelCategory='" + thirdLevelCategory + '\'' +
                ", product=" + product +
                '}';
    }
}

