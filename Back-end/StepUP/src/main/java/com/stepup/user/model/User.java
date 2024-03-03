package com.stepup.user.model;


import com.stepup.cart.model.Cart;
import com.stepup.product.model.Washing;
import jakarta.persistence.*;

import java.util.List;


@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="u_id" )
    private int id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;
    private String phoneNo;
    private String gender;

    @OneToMany(mappedBy = "userId",cascade = CascadeType.ALL)
    private List<UserAddress> address;

    @OneToOne(mappedBy = "cartUserId")
    private Cart cart;

    @OneToMany(mappedBy = "userId")
    private List<Washing> washing;

    public User() {
    }

    public User(int id, String firstName, String lastName, String email, String password, String phoneNo, String gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.gender = gender;
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

    public List<UserAddress> getAddress() {
        return address;
    }

    public void setAddress(List<UserAddress> address) {
        this.address = address;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public List<Washing> getWashing() {
        return washing;
    }

    public void setWashing(List<Washing> washing) {
        this.washing = washing;
    }
}
