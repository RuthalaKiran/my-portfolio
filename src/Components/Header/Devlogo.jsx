import React from 'react'
import { Link } from 'react-router-dom'

const Devlogo = () => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
    <p className="md:text-5xl text-3xl sm:text-3xl text-red-600 font-bold rotate-12 ">
      D
    </p>
    <p className="md:text-2xl text-lg sm:text-lg font-semibold text-violet-900 dark:text-gray-200 mt-2">
      ev
    </p>
  </Link>
  )
}

export default Devlogo
