import React from 'react'
import { useParams } from 'react-router-dom';
function Card() {
  const {userid} = useParams();
  return (
    <>
    <h1 className='text-white'>
      Hello {userid}
    </h1>
    </>
  )
}

export default Card