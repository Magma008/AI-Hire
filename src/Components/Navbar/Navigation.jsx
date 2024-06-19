import React, { useState } from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Navigation = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="shadow-md sticky z-50 bg-white top-0 dark:bg-slate-900 dark:text-sky-500 ">
      <div className="main-container">
        <div className="flex py-2 flex-col sm:flex-row justify-between sm:items-center w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-auto justify-between">

            <div className="flex items-center">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">AI Hire</h1>
              <img src="/logo.png" alt="logo" className="w-10  h-10 sm:w-12 sm:h-12 " />
            </div>

            <button onClick={() => setToggle(!toggle)} className='flex sm:hidden'>
              {toggle ? <AiOutlineMenuUnfold className="w-7 h-7 sm:w-9 sm:h-9" /> : <AiOutlineMenuFold className="w-7 h-7 sm:w-9 sm:h-9" />}
            </button>

          </div>

          <ul className={`flex overflow-hidden sm:gap-5 font-medium sm:text-lg transition-all duration-300 flex-col sm:flex-row sm:items-center gap-3 ${toggle ? "h-[136px]" : "h-0"} sm:h-auto`}>
            <li className="dark:text-white transition-all duration-300 dark:hover:text-indigo-500 hover:text-cyan-500"><a href="#" className="">Home</a></li>
            <li className="dark:text-white transition-all duration-300 dark:hover:text-indigo-500 hover:text-cyan-500"><a href="#about" className="">About</a></li>
            <li className="dark:text-white transition-all duration-300 dark:hover:text-indigo-500 hover:text-cyan-500"><a href="#cards" className="">Cards</a></li>
            <ThemeSwitch className="dark:text-sky-500" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation