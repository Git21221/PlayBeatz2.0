import { AspectRatio } from '@mui/icons-material'
import React from 'react'

function Image({url, altText, width}) {
  return (
    <img src={url} alt={altText} style={{spectRatio: '1 / 1', borderRadius: '10px'}} width={width}/>
  )
}

export default Image