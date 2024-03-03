package com.stepup.user.dto;

import com.stepup.user.model.User;

public class UserAddressDTO {

    private int addressId;
    private String address;
    private String area;
    private String city;
    private String state;
    private String pincode;
    private User userId;

    public UserAddressDTO() {
    }

    public UserAddressDTO(int addressId, String address, String area, String city, String state, String pincode, User userId) {
        this.addressId = addressId;
        this.address = address;
        this.area = area;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.userId = userId;
    }

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "UserAddressDTO{" +
                "addressId=" + addressId +
                ", address='" + address + '\'' +
                ", area='" + area + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", pincode='" + pincode + '\'' +
                ", userId=" + userId +
                '}';
    }
}
