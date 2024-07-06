import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './Update';
import Update from './Update';

function Student() {
  const navigate = useNavigate();
  const[details , setDetails] = useState([]);
  
  //showing all students.
  useEffect((e)=>{

    fetch('http://localhost:8081/api/v1/student/students')
    .then(response => response.json())
    .then(result => {
      return(setDetails(result));
    })
    .catch(error => {
      console.error('Error:', error);
    });

  } , []);

  const refreshPage = ()=>{
      window.location.reload();
  }
  

  



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {details.map((student,index)=>{
            return(
              <>
                  <tr>
                    <td>{index+1}</td>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>
                        <div>
                          
                          <Update id={student.id}  first_name={student.firstName} last_name={student.lastName} email={student.email} />

                          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{
                                  
                                  fetch('http://localhost:8081/api/v1/student/deleteStudent/' + student.id,{
                                      method:"DELETE"
                                  })
                                  .then(response => response.json())
                                  .catch(error => {
                                    console.error('Error:', error);
                                  });
                                  refreshPage();
                                  
                          }}>
                            Delete
                          </button>
                        </div>
                      
                    </td>
                  </tr>
              </>
            );
               
          })}
       
      </tbody>
    </Table>
  );
}

export default Student;