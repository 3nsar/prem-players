import React from 'react';
import { Link } from 'react-router-dom'

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  // Function to close the mobile menu
  const closeMenu = () => {
    setMobileDrawerOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg">
      <div className="text-gray-200 container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center space-x-5 ml-16">
            <span className="text-3xl font-bold text-indigo-400">PremPlayers</span>
          </div>
          <ul className="hidden lg:flex mr-16 space-x-12 font-semibold text-lg">
           
            <Link  to='/'> <li className='hover:text-indigo-600 transition-colors'>Home</li> </Link>
            <Link  to='/clubs'> <li  className='hover:text-indigo-600 transition-colors'>Club</li> </Link>
            <Link  to='/nationalities'> <li  className='hover:text-indigo-600 transition-colors'>Nation</li> </Link>
            <Link  to='positions'> <li  className='hover:text-indigo-600 transition-colors'>Position</li> </Link>
            
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed mt-4 text-center right-0 z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-center">
            <ul>
             <Link  to='/' onClick={closeMenu}> 
              <li className="py-4 text-xl font-semibold">
                  Home
              </li>
             </Link>

             <Link  to='/clubs' onClick={closeMenu}> 
              <li className="py-4 text-xl font-semibold">
                  Club
              </li>
             </Link>

             <Link  to='/nationalities' onClick={closeMenu}> 
              <li className="py-4 text-xl font-semibold">
                  Nation
              </li>
             </Link>

             <Link  to='/positions' onClick={closeMenu}> 
              <li className="py-4 text-xl font-semibold">
                  Position
              </li>
             </Link>

            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar