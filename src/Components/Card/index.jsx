import React from 'react'
import Button from '../Button/Simple'
import BorderedButton from '../Button/Bordered'


const CardComp = ({ name, role, exp, crypto, image, fn, fn1 }) => {
  return (
    <div className='shadow-inner bg-gray-200/50 dark:bg-slate-700 rounded dark:text-white p-2 flex flex-col  gap-3'>
      <div className="card-img flex justify-center overflow-hidden">
        <img src={image} alt="cardImage" className="" />
      </div>
      <div className="card-body flex flex-col gap-1 flex-1">
        <h1 className="text-2xl dark:text-cyan-400 sm:text-3xl font-bold text-center">{name} AI</h1>
        <p className="capitalize">
          <span className="font-bold">Role:</span> {role}
        </p>
        <p className="">
          <span className="font-semibold">Experience:</span> {exp} {exp > 1 ? "weeks" : "week"}</p>
        <p className="mb-4"><span className="font-bold">Crypto:</span> {crypto}</p>
        <div className="flex gap-3 mt-auto items-center w-full">
          <BorderedButton func1={fn1} text="More" extraClass="w-[100%]" />
          <Button func={fn} text="Reject" extraClass="w-[100%]" />
        </div>
      </div>
    </div>
  )
}

export default CardComp