import React from 'react'
import { Link } from 'react-router-dom'
import './songcard.css'
import {Image, Text} from '../../index'
import { SHA1 } from 'crypto-js'
function SongCard({frontname, des, url}) {
  // const namehash = SHA1(frontname);
  return (
    <>
    <Link to={`${frontname}`}>
      <div className="body-of-card bg-zinc-500 h-max flex flex-col items-center justify-center py-3 gap-2 rounded-lg hover:bg-zinc-800 hover:cursor-pointer">
        <div className="image">
          <Image
          url={url}
          alt="1:1 image"
          width="130"
          />
        </div>
        <div className="text p-3">
          <Text
          name={frontname}
          des={des}
          />
        </div>
      </div>
    </Link>
    </>
  )
}

export default SongCard