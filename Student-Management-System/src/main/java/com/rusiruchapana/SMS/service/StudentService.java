package com.rusiruchapana.SMS.service;

import com.rusiruchapana.SMS.dto.StudentDto;

import java.util.List;

public interface StudentService {

    public List<StudentDto> findStudents();

}