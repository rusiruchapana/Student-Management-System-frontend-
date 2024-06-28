import { useState } from "react";

function FormEntry(){

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


    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Use fetch to send data to the backend
        fetch('http://localhost:8081/api/v1/student/addstudent', {
          method: 'POST',
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
      };
    

    

    return(
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
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Add
                        </button>

                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Update
                        </button>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Rusiru chapana. All rights reserved.
                </p>
            </div>
        </div>
        
    );

}

export default FormEntry;