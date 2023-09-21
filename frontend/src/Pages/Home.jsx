import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-black h-[93vh] text-white flex items-center justify-center'>
      <div className='flex items-center flex-col justify-center'>
        <h1 className='text-[4rem] font-extrabold' >Welcome Creators</h1>
        <p className='text-[1.2rem]'>Get the best Email Newsletter Service on the planet.</p>

        <Link to='/register'><button className='bg-slate-200 hover:bg-slate-300 text-[1.5rem] text-black  font-bold px-[50px] py-3 rounded-full my-5'>Join Us</button></Link>
      </div>
    </div>
  )
}

export default Home
