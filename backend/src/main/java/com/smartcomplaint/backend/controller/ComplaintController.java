package com.smartcomplaint.backend.controller;

import com.smartcomplaint.backend.entity.Complaint;
import com.smartcomplaint.backend.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "*")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    // Create Complaint
    @PostMapping
    public Complaint createComplaint(@RequestBody Complaint complaint) {
        return complaintService.saveComplaint(complaint);
    }

    // Get All Complaints
    @GetMapping
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    // Get Complaint By Id
    @GetMapping("/{id}")
    public Complaint getComplaintById(@PathVariable Long id) {
        return complaintService.getComplaintById(id);
    }

    // Get Complaints By User Id
    @GetMapping("/user/{userId}")
    public List<Complaint> getComplaintsByUser(@PathVariable Long userId) {
        return complaintService.getComplaintsByUser(userId);
    }

    // Search Complaints By Title
    @GetMapping("/search")
    public List<Complaint> searchComplaints(@RequestParam String title) {
        return complaintService.searchComplaints(title);
    }

    // Filter Complaints By Status
    @GetMapping("/status")
    public List<Complaint> filterByStatus(@RequestParam String status) {
        return complaintService.filterByStatus(status);
    }

    // Update Complaint Status
    @PutMapping("/{id}")
    public Complaint updateComplaintStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return complaintService.updateStatus(id, status);
    }

    // Delete Complaint
    @DeleteMapping("/{id}")
    public String deleteComplaint(@PathVariable Long id) {

        complaintService.deleteComplaint(id);

        return "Complaint Deleted Successfully";
    }
}