import React, { createContext, useContext } from 'react'
import { useEffect } from 'react'

import { useState } from 'react'
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom'
import { deleteUser, getUsers, updateUser } from '../service/userService'

export default function UserList() {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('all');
    const[edituser,setEdituser]=useState(false);
    const[newUser,setNewUser]=useState({});

    const callApi=async()=>{
      await getUsers()
      .then(response =>{ setUserData(response.data.dat)
      console.log(response.data)
      })
      .catch(error=>
           console.log(error))  

      }
       
    useEffect(() => {
    
      callApi()
      }, [])
  

    function handleDelete(id) {
        deleteUser(id)
        .then(res=>{
            console.log(res.data.message)
            callApi()
        })
        .catch(error=>{
            console.log(error)
        })
    }


 

    function handleUpdate(use){
        setEdituser(true)
        setNewUser(use);
    }
  

    function handleChange(event){
        const val=event.target.value;
        setNewUser({...newUser,[event.target.name]:val});
      }

 function updateNewUser(){
     updateUser(newUser,newUser._id)
     .then((res)=>{
        console.log(res.data.message)
        setEdituser(false)
        callApi()
   
      })
      .catch(error=>console.log(error))
    }


    return (
        <div>
         {!edituser && <div> <h1 className='text-2xl font-semibold mx-auto w-fit' >
                UserList
            </h1>

            <div className='flex gap-2 flex-wrap'>
        {userData?.map((item)=>(
            <div className='p-2 m-2 shadow-2xl rounded-md'>
                <p>Name : {item.name}</p>
                <p>Email : {item.email}</p>
                <p>Address : {item.address}</p>
                <p>Phone : {item.phone}</p>
                <div className='flex justify-between'>

                <button className='bg-red-400 p-1 rounded-md mx-1' onClick={() =>handleDelete(item._id)}>Delete</button>
                <button onClick={()=>handleUpdate(item)}>Update</button>
                </div>
            </div>
        ))}
       </div>
       </div>
       }
       {edituser &&  <div>
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
                  value={newUser.name}
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
                  value={newUser.email}
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
                  value={newUser.address}
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
                  value={newUser.phone}
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
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={()=>{setEdituser(false)}}>
          Cancel
        </button>
        <button
          type="submit"
          onClick={updateNewUser}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
         Update
        </button>
      </div>


    </form>



       </div> }


        </div>
    )
    
       }