import React from 'react'
import './songcard.css'
import {Image, Text} from '../../index'
function SongCard({frontname, des, url}) {
  return (
    <>
      <div className="body-of-card bg-zinc-900 h-max flex flex-col p-6 gap-2 rounded-lg hover:bg-zinc-800 hover:cursor-pointer">
        <div className="image">
          <Image
          url={url}
          alt="1:1 image"
          width="130"
          />
        </div>
        <div className="text">
          <Text
          name={frontname}
          des={des}
          />
        </div>
      </div>
    </>
  )
}

export default SongCard