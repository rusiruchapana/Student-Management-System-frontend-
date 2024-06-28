import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Student() {

  const[details , setDetails] = useState([]);
  
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


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
          {details.map((student)=>{
            return(
              <>
                  <tr>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                  </tr>
              </>
            );
               
          })}
       
      </tbody>
    </Table>
  );
}

export default Student;