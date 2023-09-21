import React from 'react'

const Register = () => {
  return (
    <div className='bg-black h-[93vh] flex items-center justify-center'>

      <form className='text-white flex flex-col gap-6 font-mono w-[30%] items-center'>
        <input className=' outline-none w-full text-[1.1rem] bg-black border-b border-b-slate-500 focus:border-b-slate-100' name='name' placeholder='Enter your name'/>
        <input className=' outline-none w-full text-[1.1rem] bg-black border-b border-b-slate-500 focus:border-b-slate-100' name='name' placeholder='Enter your business name'/>
        <input className=' outline-none w-full text-[1.1rem] bg-black border-b border-b-slate-500 focus:border-b-slate-100' name='name' placeholder='Enter your email'/>
        <button className='border px-6 py-1 rounded-full text-[1.1rem] hover:bg-white hover:text-black hover:font-semibold transition'>Submit</button>

      </form>

    </div>
  )
}

export default Register
