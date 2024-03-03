package com.stepup.order.service;

import com.stepup.order.model.Order;
import com.stepup.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }

    public List<Order> getAllOrder(){return orderRepository.findAll();}
}
