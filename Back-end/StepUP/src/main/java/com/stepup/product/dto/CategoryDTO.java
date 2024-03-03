package com.stepup.product.dto;

public class CategoryDTO {

    private int categoryId;
    private String topLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;

    public CategoryDTO() {
    }

    public CategoryDTO(int categoryId, String topLevelCategory, String secondLevelCategory, String thirdLevelCategory) {
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

    @Override
    public String toString() {
        return "CategoryDTO{" +
                "categoryId=" + categoryId +
                ", topLevelCategory='" + topLevelCategory + '\'' +
                ", secondLevelCategory='" + secondLevelCategory + '\'' +
                ", thirdLevelCategory='" + thirdLevelCategory + '\'' +
                '}';
    }
}
