import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[7vh] items-center px-4 bg-black text-white font-mono'>
      <div className='font-bold text-[1.5rem]'>Newsify</div>
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/login">Log in</Link>
        <Link to="/register">Join us</Link>
      </div>
    </div>
  )
}

export default Navbar
