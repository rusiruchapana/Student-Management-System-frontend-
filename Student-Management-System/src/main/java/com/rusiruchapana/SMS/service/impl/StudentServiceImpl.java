package com.rusiruchapana.SMS.service.impl;

import com.rusiruchapana.SMS.dto.StudentDto;
import com.rusiruchapana.SMS.entity.Student;
import com.rusiruchapana.SMS.mapper.Mapping;
import com.rusiruchapana.SMS.repository.StudentRepository;
import com.rusiruchapana.SMS.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<StudentDto> findStudents() {

        List<Student> student = studentRepository.findAll();
        List<StudentDto> dtos = student.stream()
                .map((entity) -> Mapping.mapEntityToDto(entity))
                .collect(Collectors.toList());

        return dtos;
    }
}
