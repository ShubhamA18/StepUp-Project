package com.stepup.product.dto;

public class SizeDTO {

    private int sizeId;
    private int sizeType;
    private int sizeQuantity;

    public SizeDTO() {
    }

    public SizeDTO(int sizeId, int sizeType, int sizeQuantity) {
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

    @Override
    public String toString() {
        return "SizeDTO{" +
                "sizeId=" + sizeId +
                ", sizeType=" + sizeType +
                ", sizeQuantity=" + sizeQuantity +
                '}';
    }
}
