import React from 'react'

function Button({name}) {
  return (
    <button className='px-5 py-2 font-semibold bg-white transition linear delay-100 rounded-full hover:bg-orange-600 hover:text-white'>{name}</button>
  )
}

export default Button