import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Update(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

    const[formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:""
    });


    const handleEvent = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const refreshPage = ()=>{
      window.location.reload();
    }


    const handleUpdate = (e) => {
        e.preventDefault();
    
        console.log(props.id);
        // Use fetch to send data to the backend
        fetch("http://localhost:8081/api/v1/student/updateStudent/" + props.id, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
          console.log('Form Submitted:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        setFormData({
            firstName:"",
            lastName:"",
            email:""
        });

        refreshPage();
      };



  return (
    <>
      
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3 mr-3" onClick={handleShow}> 
                Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update student.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
                <div class="flex justify-center items-center h-screen">
                    <div class="w-full max-w-xs ">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    FirstName
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={handleEvent} name="firstName" value={formData.firstName} />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    LastName
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={handleEvent} name="lastName" value={formData.lastName} />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Email
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={handleEvent} name="email" value={formData.email} />
                            </div>

                            

                            <div class="flex items-center justify-between">
                                

                                {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Close
                                </button> */}
                            </div>
                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            &copy;2020 Rusiru chapana. All rights reserved.
                        </p>
                    </div>
                </div>
        </Modal.Body>

        <Modal.Footer>
          <button class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClose}>Close</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleUpdate}>
                    Update
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;