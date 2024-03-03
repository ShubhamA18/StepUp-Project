package com.stepup.admin.model;


import jakarta.persistence.*;

@Entity
@Table(name="Admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String adminName;
    private String adminPassword;

    public Admin() {

    }

    public Admin(int id, String adminName, String adminPassword) {
        this.id = id;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getAdminName() {
        return adminName;
    }
    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }
    public String getAdminPassword() {
        return adminPassword;
    }
    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

}
