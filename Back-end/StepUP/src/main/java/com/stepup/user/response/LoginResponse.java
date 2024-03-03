package com.stepup.user.response;

public class LoginResponse {
    String message;
    Boolean status;
    int id;

    public LoginResponse() {
    }

    public LoginResponse(String message, Boolean status, int id) {
        this.message = message;
        this.status = status;
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                ", id=" + id +
                '}';
    }
}
