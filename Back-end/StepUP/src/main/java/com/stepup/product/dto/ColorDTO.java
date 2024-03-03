package com.stepup.product.dto;

import com.stepup.product.model.Product;

public class ColorDTO {
    private int colorId;
    private String colorName;

    public ColorDTO() {
    }

    public ColorDTO(int colorId, String colorName) {
        this.colorId = colorId;
        this.colorName = colorName;
    }

    public int getColorId() {
        return colorId;
    }

    public void setColorId(int colorId) {
        this.colorId = colorId;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    @Override
    public String toString() {
        return "ColorDTO{" +
                "colorId=" + colorId +
                ", colorName='" + colorName + '\'' +
                '}';
    }
}
