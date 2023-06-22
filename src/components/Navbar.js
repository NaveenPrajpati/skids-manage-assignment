import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav className='w-full p-1 bg-slate-900 text-white flex justify-around' >
    
    <NavLink to='/'><h1 className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>
    Add Employee
    </h1></NavLink>
    <NavLink to='/userList'><h2 className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Employee List</h2></NavLink>
    </nav>

    </div>
  )
}
