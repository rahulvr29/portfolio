import React, { useState } from 'react'
import a from "react-anchor-link-smooth-scroll";
import {BiMenu, BiX} from "react-icons/bi"
import MenuOverlay from './MenuOverlay';
// import { AiOutlineCloseCircle } from "react-icons/ai"




const navLinks = [
  {
    title: "About",
    path:"#about"
  },
  {
    title: "Skill",
    path:"#skill"
  },
  {
    title: "Project",
    path:"#project"
  },
  {
    title: "Contact",
    path:"#contact"
  }
]

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-100'>
      <div className="flex flex-wrap items-center justify-between mx-auto p-6">
          <a href={"/"} className="text-white text-2xl md:text-5xl font-semibold"> Portfolio</a>
          <div className="block md:hidden">
            {
              !navbarOpen ? (
                <button 
                onClick={()=> setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white border-white ">
                  <BiMenu className="h-5 w-8"/>
                </button>
              ) : (
                <button
                onClick={()=> setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white">
                  <BiX className="h-5 w-5"/>
                </button>
              )
            }
          </div>
          <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
              <li>
              <a
                  href={"#about"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      About
              </a>
              </li>
              <li>
              <a
                  href={"#skill"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Skill
              </a>
              </li><li>
              <a
                  href={"#project"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Project
              </a>
              </li><li>
              <a
                  href={"#contact"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Contact
              </a>
              </li>
            </ul>
          </div>
      </div>  
          {
            navbarOpen ? <MenuOverlay/> : null
          }
      </nav>
  )
}

export default Navbar