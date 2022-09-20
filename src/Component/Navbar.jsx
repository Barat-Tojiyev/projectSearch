import React, { Component } from 'react'
import Logo from './Images/logo2.png'
export default class Navbar extends Component {
  render() {
    return (

        <>
        <div className='flex justify-around text-lg  text-white bg-cyan-900 py-4'>
        <div>
            <img src={Logo} className='h-[50px]'  alt='#'/>
        </div>
        <ul className='flex justify-center items-center '>
            <li className='ml-5 cursor-pointer' >Home</li>
            <li className='ml-5 cursor-pointer'>Propirties</li>
            <li className='ml-5 cursor-pointer'>Contact</li>
        </ul>
        <div className='flex justify-center items-center'>
            <button className='border border-white px-7 py-2'>Login</button>
        </div>
      </div>
        </>
      
    )
  }
}
