import React from 'react'
import Button from '../../Components/Button/Simple';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ModulePage = ({ elems, setDetail }) => {
  return (
    <div className='fixed top-0 left-0 flex justify-center w-full bg-black/30 backdrop-blur z-[1000] items-center h-screen flex-col'>
      <div className="bg-white dark:bg-slate-800 rounded w-auto h-auto p-2 sm:p-4 justify-center">
        <div className="flex border-2 p-1 rounded border-gray-500 dark:border-slate-900 items-center flex-col md:flex-row gap-4 justify-between w-full h-full">
          <div className="flex flex-col items-center">
            <img src={elems.image} alt="module-img" className="object-center object-cover" />
          </div>
          <div className="flex gap-4 flex-col dark:text-white sm:flex-row md:items-center">
            <div className="flex flex-col gap-2 sm:text-lg">
              <p className=""><span className="font-bold">AI Name:</span> {elems.firstName}</p>
              <p className=""><span className="font-bold">Role:</span> {elems.company.title}</p>
              <p className=""><span className="font-bold">Experience:</span> {elems.age} weeks</p>
              <p className=""><span className="font-bold">Voice:</span> {elems.gender}</p>
            </div>
            <div className='flex flex-col gap-2 sm:text-lg'>
              <p className="font-bold">You can contact us here:</p>
              <a href={`mailto:${elems.email}`}>{elems.email}</a>
              <a href={`tel:${elems.phone}`}>{elems.phone}</a>
              <p><span className="font-bold">Github:</span> @{elems.username}</p>
              <div className="flex justify-end">
                <button className="items-end text-red-400" onClick={() => setDetail("")}>
                  <FaRegArrowAltCircleRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModulePage