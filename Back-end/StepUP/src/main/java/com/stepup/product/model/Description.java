package com.stepup.product.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Description {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="d_id")
    private int dId;
    private String dMaterialType;
    private String dWaterResistance;
    private String dOrigin;
    private String dWeight;
    private String dDescription;
    @JsonIgnore
    @OneToOne(mappedBy = "descriptionId",cascade =CascadeType.ALL)
    private Product product;

    public Description(){}

    public Description(int dId, String dMaterialType, String dWaterResistance, String dOrigin, String dWeight, String dDescription) {
        this.dId = dId;
        this.dMaterialType = dMaterialType;
        this.dWaterResistance = dWaterResistance;
        this.dOrigin = dOrigin;
        this.dWeight = dWeight;
        this.dDescription = dDescription;
    }

    public int getdId() {
        return dId;
    }

    public void setdId(int dId) {
        this.dId = dId;
    }

    public String getdMaterialType() {
        return dMaterialType;
    }

    public void setdMaterialType(String dMaterialType) {
        this.dMaterialType = dMaterialType;
    }

    public String getdWaterResistance() {
        return dWaterResistance;
    }

    public void setdWaterResistance(String dWaterResistance) {
        this.dWaterResistance = dWaterResistance;
    }

    public String getdOrigin() {
        return dOrigin;
    }

    public void setdOrigin(String dOrigin) {
        this.dOrigin = dOrigin;
    }

    public String getdWeight() {
        return dWeight;
    }

    public void setdWeight(String dWeight) {
        this.dWeight = dWeight;
    }

    public String getdDescription() {
        return dDescription;
    }

    public void setdDescription(String dDescription) {
        this.dDescription = dDescription;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "Description{" +
                "dId=" + dId +
                ", dMaterialType='" + dMaterialType + '\'' +
                ", dWaterResistance='" + dWaterResistance + '\'' +
                ", dOrigin='" + dOrigin + '\'' +
                ", dWeight='" + dWeight + '\'' +
                ", dDescription='" + dDescription + '\'' +
                ", product=" + product +
                '}';
    }
}

