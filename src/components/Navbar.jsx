import React from 'react'
import navcofi from "../../public/Co-Fi-removebg-preview.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-[#e6d8c6]'>
      <div className='flex gap-6'>
        {/* convert to <Link> later */}
        <p>MENU</p>
        <p>FOOD</p>
        <p>HISTORY</p>
      </div>
      <Link to="/">
        <img className='w-27' src={navcofi} alt="" />
      </Link>
      <div className='flex gap-6'>
        <p>ACCOUNT</p>
        <Link to="/admin"> <p>DASHBOARD</p> </Link>
        <Link to="/cart"> <p>CART</p> </Link>
      </div>
    </div> 
  )
}

export default Navbar;