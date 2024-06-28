package com.rusiruchapana.SMS.service;

import com.rusiruchapana.SMS.dto.StudentDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StudentService {

    public List<StudentDto> findStudents();
    public StudentDto addStudent(StudentDto studentDto);
    public StudentDto getOneStudent(Long id);
    public StudentDto updateStudent(Long id , StudentDto studentDto);
    public String deleteStudent(Long id);
}
