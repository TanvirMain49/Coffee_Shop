import React from 'react'
import navcofi from "../../public/Co-Fi-removebg-preview.png"

const Navbar = () => {
  return (
    <div className='flex justify-between p-6'>
      <div className='flex gap-6'>
        {/* convert to <Link> later */}
        <p>MENU</p>
        <p>FOOD</p>
        <p>HISTORY</p>
      </div>
      <img className='w-27' src={navcofi} alt="" />
      <div className='flex gap-6'>
        <p>ACCOUNT</p>
        <p>BLOG</p>
        <p>CART</p>
      </div>
    </div> 
  )
}

export default Navbar;