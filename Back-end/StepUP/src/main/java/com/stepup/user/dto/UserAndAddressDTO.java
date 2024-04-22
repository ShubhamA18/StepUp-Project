package com.stepup.user.dto;

import com.stepup.user.model.UserAddress;

public class UserAndAddressDTO {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNo;
    private String gender;
    private UserAddress addressId;
    private String address;
    private String area;
    private String city;
    private String state;
    private String pincode;
//    private User userId;


    public UserAndAddressDTO() {
    }

    public UserAndAddressDTO(int id, String firstName, String lastName, String email, String password, String phoneNo, String gender, UserAddress addressId, String address, String area, String city, String state, String pincode) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.gender = gender;
        this.addressId = addressId;
        this.address = address;
        this.area = area;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public UserAddress getAddressId() {
        return addressId;
    }

    public void setAddressId(UserAddress addressId) {
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

    @Override
    public String toString() {
        return "UserAndAddressDTO{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", gender='" + gender + '\'' +
                ", addressId=" + addressId +
                ", address='" + address + '\'' +
                ", area='" + area + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", pincode='" + pincode + '\'' +
                '}';
    }
}
