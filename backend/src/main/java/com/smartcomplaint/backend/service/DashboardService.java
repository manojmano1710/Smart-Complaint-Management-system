package com.smartcomplaint.backend.service;

import com.smartcomplaint.backend.dto.DashboardResponse;
import com.smartcomplaint.backend.entity.Complaint;
import com.smartcomplaint.backend.repository.ComplaintRepository;
import com.smartcomplaint.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    public DashboardResponse getDashboardData() {

        long totalUsers = userRepository.count();

        long totalComplaints = complaintRepository.count();

        List<Complaint> complaints = complaintRepository.findAll();

        long pendingComplaints = complaints.stream()
                .filter(c -> c.getStatus().equalsIgnoreCase("Pending"))
                .count();

        long resolvedComplaints = complaints.stream()
                .filter(c -> c.getStatus().equalsIgnoreCase("Resolved"))
                .count();

        return new DashboardResponse(
                totalUsers,
                totalComplaints,
                pendingComplaints,
                resolvedComplaints
        );
    }
}