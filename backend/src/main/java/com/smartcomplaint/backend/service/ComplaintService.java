package com.smartcomplaint.backend.service;

import com.smartcomplaint.backend.entity.Complaint;
import com.smartcomplaint.backend.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    // Save Complaint
    public Complaint saveComplaint(Complaint complaint) {
        complaint.setStatus("Pending");
        return complaintRepository.save(complaint);
    }

    // Get All Complaints
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    // Get Complaint By Id
    public Complaint getComplaintById(Long id) {
        return complaintRepository.findById(id).orElse(null);
    }

    // Update Complaint Status
    public Complaint updateStatus(Long id, String status) {

        Complaint complaint = complaintRepository.findById(id).orElse(null);

        if (complaint == null) {
            return null;
        }

        complaint.setStatus(status);

        return complaintRepository.save(complaint);
    }

    // Delete Complaint
    public void deleteComplaint(Long id) {

        complaintRepository.deleteById(id);

    }

    // Get Complaints By User Id
    public List<Complaint> getComplaintsByUser(Long userId) {

        return complaintRepository.findByUserId(userId);

    }

    // Search Complaints By Title
    public List<Complaint> searchComplaints(String title) {

        return complaintRepository.findByTitleContainingIgnoreCase(title);

    }

    // Filter Complaints By Status
    public List<Complaint> filterByStatus(String status) {

        return complaintRepository.findByStatusIgnoreCase(status);

    }

}