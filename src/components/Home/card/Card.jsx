import React from 'react'
import { useParams } from 'react-router-dom';
function Card() {
  const {userid} = useParams();
  return (
    <>Hello {userid}</>
  )
}

export default Card