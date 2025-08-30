import React from 'react'

const header = () => {
  return (
    <div className='w-full h-20 bg-gray-400 text-white flex justify-center items-center text-3xl font-bold gap-10'>
      <div>
        Sourav
      </div>
      <div className='ml-20 flex gap-10 text-lg font-normal'>
        <ul className='flex gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Tech Stack</li>
          <li>Contact</li>
        </ul>
      </div>
      
    </div>
  )
}

export default header
