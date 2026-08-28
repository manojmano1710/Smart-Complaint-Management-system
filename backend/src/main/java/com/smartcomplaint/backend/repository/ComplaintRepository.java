package com.smartcomplaint.backend.repository;

import com.smartcomplaint.backend.entity.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

    // Get complaints by user id
    List<Complaint> findByUserId(Long userId);

    // Search complaints by title
    List<Complaint> findByTitleContainingIgnoreCase(String title);

    // Filter complaints by status
    List<Complaint> findByStatusIgnoreCase(String status);

}