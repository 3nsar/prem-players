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
            <span className="text-3xl font-bold text-indigo-400 font-dothan">Ensar</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 font-semibold text-lg">
            <li className="hover:text-indigo-600 transition-colors">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-indigo-600 transition-colors">
              <a href="#about">Über mich</a>
            </li>
            <li className="hover:text-indigo-600 transition-colors">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-indigo-600 transition-colors">
              <a href="#projects">Projekte</a>
            </li>
            <li className="hover:text-indigo-600 transition-colors">
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-5 mr-14">
            <a
              href="mailto:ensar.m021@gmail.com"
              className="py-2 px-4 font-semibold text-lg text-center rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br"
            >
              Kontaktiere mich
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed mt-4 text-center right-0 z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-center">
            <ul>
              <li className="py-4 text-xl font-semibold">
                <a href="#" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="py-4 text-xl font-semibold">
                <a href="#about" onClick={closeMenu}>
                  Über mich
                </a>
              </li>
              <li className="py-4 text-xl font-semibold">
                <a href="#skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li className="py-4 text-xl font-semibold">
                <a href="#projects" onClick={closeMenu}>
                  Projekte
                </a>
              </li>
              <li className="py-4 text-xl font-semibold">
                <a href="#contact" onClick={closeMenu}>
                  Kontakt
                </a>
              </li>
            </ul>
            <div className="flex flex-col justify-center">
              <a
                href="mailto:ensar.m021@gmail.com"
                onClick={closeMenu}
                className="py-4 px-4 font-semibold text-lg text-center rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300"
              >
                Kontaktiere mich
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar