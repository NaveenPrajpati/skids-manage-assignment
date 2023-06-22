import React, { useState } from 'react'
import { addUser } from '../service/userService';
import { toast } from 'react-hot-toast';


export default function AddUser() {

  const[user,setUser]=useState({
    name:"",
    email:"",
    address:'',
    phone:""
  })
  function handleChange(event){
    const val=event.target.value;
    setUser({...user,[event.target.name]:val});
  }

  function saveUser(event){
    event.preventDefault();
    addUser(user)
    .then(()=>{
      toast("user saved")
  setUser({
    name:"",
    email:"",
    address:'',
    phone:""
  })
    })
    .catch(error=>console.log(error))


  }


  return (
    <form className='w-[600px] mx-auto'>
         <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">User Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                 Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
               Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={saveUser}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>


    </form>

    
  )
}
