import React from 'react'

function Logoimage({imagePath, width}) {
  return (
    <>
    <img src={imagePath} alt="Company-logo" width={width} />
    </>
  )
}

export default Logoimage