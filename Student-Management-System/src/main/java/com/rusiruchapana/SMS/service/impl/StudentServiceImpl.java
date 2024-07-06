package com.rusiruchapana.SMS.service.impl;

import com.rusiruchapana.SMS.dto.StudentDto;
import com.rusiruchapana.SMS.entity.Student;
import com.rusiruchapana.SMS.mapper.Mapping;
import com.rusiruchapana.SMS.repository.StudentRepository;
import com.rusiruchapana.SMS.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public StudentDto addStudent(StudentDto studentDto) {
//        Student student = new Student();
//        student.setFirstName(student.getFirstName());
//        student.setLastName(studentDto.getLastName());
//        student.setEmail(studentDto.getEmail());

        Student student = Mapping.mapDtoToEntity(studentDto);
        studentRepository.save(student);

        StudentDto studentDto1 = Mapping.mapEntityToDto(student);
        return studentDto1;
    }


    @Override
    public List<StudentDto> findStudents() {

        List<Student> student = studentRepository.findAll();
        List<StudentDto> dtos = student.stream()
                .map((entity) -> Mapping.mapEntityToDto(entity))
                .collect(Collectors.toList());

        return dtos;
    }


    @Override
    public StudentDto getOneStudent(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        Student student = optionalStudent.get();
        StudentDto studentDto = Mapping.mapEntityToDto(student);
        return studentDto;
    }

    public StudentDto updateStudent(Long id , StudentDto studentDto){
        Optional<Student> optionalStudent = studentRepository.findById(id);
        Student student = optionalStudent.get();

        //update student details.
        Student student1 = Mapping.mapDtoToEntity(studentDto);

        //updated the database details with new entered details;
        //student.setId(student1.getId());
        student.setFirstName(student1.getFirstName());
        student.setLastName(student1.getLastName());
        student.setEmail(student1.getEmail());

        studentRepository.save(student);

        return Mapping.mapEntityToDto(student);

    }


    public String deleteStudent(Long id){
        studentRepository.deleteById(id);
        return "Succesfully deleted";
    }


}
