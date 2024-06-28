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


    //create a student.
    @PostMapping("/addstudent")
    public ResponseEntity<StudentDto> addStudent( @RequestBody StudentDto studentDto){
        return ResponseEntity.ok(studentService.addStudent(studentDto));
    }

    //get all students.
    @GetMapping("/students")
    public List<StudentDto> students_list(){
        List<StudentDto> studentDtos = studentService.findStudents();
        return studentDtos;
    }

    //get a single student.
    @GetMapping("/get-one-student/{student_id}")
    public StudentDto get_One_Student(@PathVariable("student_id") Long id){
        StudentDto studentDto = studentService.getOneStudent(id);
        return studentDto;
    }

    @PatchMapping("/updateStudent/{student_id}")
    public StudentDto updateStudent(@PathVariable("student_id") Long id , @RequestBody StudentDto studentDto){
        StudentDto studentDto1 = studentService.updateStudent(id , studentDto);
        return  studentDto1;

    }

    @DeleteMapping("/deleteStudent/{student_id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("student_id") Long id){
        String message = studentService.deleteStudent(id);
       return ResponseEntity.ok(message);
    }





}
