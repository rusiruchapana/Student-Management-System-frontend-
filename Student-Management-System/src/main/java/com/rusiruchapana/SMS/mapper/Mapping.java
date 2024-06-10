package com.rusiruchapana.SMS.mapper;

import com.rusiruchapana.SMS.dto.StudentDto;
import com.rusiruchapana.SMS.entity.Student;

public class Mapping {

   public static Student mapDtoToEntity(StudentDto studentDto){

       Student student = new Student(
               studentDto.getId(),
               studentDto.getFirstName(),
               studentDto.getLastName(),
               studentDto.getEmail()
       );
       return student;
   }

   public static StudentDto mapEntityToDto(Student student){

       StudentDto studentDto = new StudentDto(
               student.getId(),
               student.getFirstName(),
               student.getLastName(),
               student.getEmail()
       );
       return  studentDto;
   }

}
