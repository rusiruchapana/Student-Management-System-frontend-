package com.rusiruchapana.SMS.repository;

import com.rusiruchapana.SMS.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student , Long> {
}
