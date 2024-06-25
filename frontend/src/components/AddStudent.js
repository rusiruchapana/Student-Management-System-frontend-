import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddStudent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[details , setDetails] = useState({
        name: "",
        lastname: "",
        email: ""
  });


  const handleEvent = (e)=>{
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        });
  }


  const saveData = (e)=>{
        
        fetch("http://localhost:8081/api/v1/student/addstudent",
            {
                method: "POST",
                
                body: JSON.stringify(details)
            }
        )
            .then((response)=>{return(response.json());})
            .then((data)=>{
                    //console.log("Succesfully added data." , data);
                    
                        setDetails(
                            {
                                name:"",
                                lastname:"",
                                email:""
                            }
                        )
                    
            })
            .catch((e)=>{
                    console.log("Error" , e);
            })

            handleClose();
  }




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
            + Add new student
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Student.</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        First Name
                    </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='name' onChange={handleEvent} value={details.name} />
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Last Name
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='lastname' onChange={handleEvent} value={details.lastname}/>
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Email
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='email' onChange={handleEvent} value={details.email} />
                    </div>
                </div>
                
                
            </form>
        </Modal.Body>


        <Modal.Footer>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                </div>

                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={saveData} >
                                Add
                            </button>
                        </div>
                </div>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default AddStudent;