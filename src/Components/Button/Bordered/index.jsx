import React from 'react'

const BorderedButton = ({text, extraClass, func1}) => {
  return (
    <button onClick={func1} className={`px-5 py-1 font-medium border-2 dark:border-teal-500 dark:bg-teal-500 transition-all duration-300 hover:bg-transparent dark:hover:text-teal-500 dark:text-white bg-amber-500 border-amber-500 hover:text-amber-500 ${extraClass}`}>{text}</button>
  )
}

export default BorderedButton