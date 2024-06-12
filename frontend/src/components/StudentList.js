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

    //console.log(details);
    return(    
        <>
           {details.map(()=>{
                return(
                    <>
                        <Card />
                    </>
                );
                
           })}
        </>
    );
}

export default StudentList;