import React from 'react'

export default function Icon({initial="D"}) {
  return (
    <div className='h-10 w-10 bg-gray-300 flex justify-center item-center rounded-full'>
        <p className='font-semibold mt-1 text-xl uppercase'>{initial}</p>
    </div>
  )
}
