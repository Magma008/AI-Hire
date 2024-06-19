import React from 'react'

const Button = ({text, extraClass, func}) => {
  return (
    <button onClick={func} className={`px-5 py-1 font-medium border-2 dark:border-rose-500 dark:bg-rose-500 transition-all duration-300 hover:bg-transparent dark:hover:text-rose-500 dark:text-white bg-violet-500 border-violet-500 hover:text-violet-500 ${extraClass}`}>{text}</button>
  )
}

export default Button