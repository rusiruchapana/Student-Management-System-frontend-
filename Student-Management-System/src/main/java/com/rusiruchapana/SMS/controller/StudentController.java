package com.rusiruchapana.SMS.controller;

import com.rusiruchapana.SMS.dto.StudentDto;
import com.rusiruchapana.SMS.mapper.Mapping;
import com.rusiruchapana.SMS.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;


//    @GetMapping("/students")
//    public ResponseEntity<List<StudentDto>> students_list(){
//        List<StudentDto> studentDtos = studentService.findStudents();
//        return ResponseEntity.ok(studentDtos);
//    }

    @GetMapping("/students")
    public List<StudentDto> students_list(){
        List<StudentDto> studentDtos = studentService.findStudents();
        return studentDtos;
    }

    @PostMapping("/addstudent")
    public String addStudent( @RequestBody StudentDto studentDto){
        studentService.addStudent(studentDto);
        return "Succesfully added student";
    }





}
