import React from 'react'

const Menu = () => {
  return (
    <div className=' p-1 px-2 flex justify-between items-center bg-blue-500 text-lg'>
        <div className='w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-amber-500'>
            <img src='./images/logo.png' className='w-[80%] h-[80%]'/>

        </div>

        <ul className='flex gap-3 items-center text-white '>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
            <li className='px-3 py-2 rounded-2xl border'>Home</li>
        </ul>
        <a href='#' className='p-2 border-2 rounded border-amber-950 '>Quote Now</a>
    </div>
  )
}

export default Menu