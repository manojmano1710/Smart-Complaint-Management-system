package com.smartcomplaint.backend.service;

import com.smartcomplaint.backend.entity.User;
import com.smartcomplaint.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {

        System.out.println("===== INSIDE SERVICE =====");

        try {
            User savedUser = userRepository.save(user);
            System.out.println("===== USER SAVED SUCCESSFULLY =====");
            return savedUser;
        } catch (Exception e) {
            System.out.println("===== ERROR WHILE SAVING =====");
            e.printStackTrace();
            throw e;
        }
    }

    // Login User
    public User loginUser(String email, String password) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return null;
        }

        if (!user.getPassword().equals(password)) {
            return null;
        }

        return user;
    }

    // Get All Users
    public List<User> getAllUsers() {

        return userRepository.findAll();

    }

    // Get User By Id
    public User getUserById(Long id) {

        return userRepository.findById(id).orElse(null);

    }

    // Delete User
    public void deleteUser(Long id) {

        userRepository.deleteById(id);

    }
}