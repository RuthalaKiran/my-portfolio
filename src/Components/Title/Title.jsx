import React from 'react'

const Title = ({text}) => {
  return (
    <div>
       <h2 className="text-center text-2xl font-extrabold uppercase tracking-[.4rem] text-gray-700 dark:text-gray-500 ">
        {text}
      </h2>
    </div>
  )
}

export default Title
