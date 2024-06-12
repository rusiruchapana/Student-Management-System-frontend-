import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function StudentList(){
    
    const[details , setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/student/students')
            .then(response => {
                setDetails(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the students!', error);
            });
    }, []);

    console.log(details);
    return(    
        <>
           {details.map((std)=>{
                return(
                    <>
                        <Card key={std[0].id} first_name={std[0].firstName} last_name={std[0].lastName} email={std[0].email}/>
                    </>
                );
                
           })}
        </>
    );
}

export default StudentList;