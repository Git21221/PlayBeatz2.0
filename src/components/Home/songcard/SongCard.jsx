import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Text} from '../../index'
function SongCard({frontname, des, url}) {
  return (
    <>
    <Link to={`${frontname}`}>
      <div className="body-of-card h-max flex flex-col gap-2 rounded-lg lg:w-[160px] md:w-[160px] w-[120px]">
        <div className="image">
          <Image
          url={url}
          alt="1:1 image"
          width="160"
          />
        </div>
        <div className="text w-fit">
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