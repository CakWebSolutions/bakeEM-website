import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen bg-[#EFD9EF] h-28'>
      <div className='h-20 mx-28 bg-white rounded-br-[20px] rounded-bl-[20px] shadow-custom-1'>
        <div className='flex flex-row mx-4'>
          <img src="logo.png" alt="BakeEM, Bakery in Tirana Logo" className='h-20 w-20' />
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-center items-center'>
              <a href='#' className='mx-2 text-xs'>Home</a>
              <a href='#' className='mx-2 text-xs'>Process</a>
              <a href='#' className='mx-2 text-xs'>Shop</a>
              <a href='#' className='mx-2 text-xs'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
