import React from 'react'
import {Clock as ClockIcon} from "lucide-react";

function TvShowCard({title,_id,channel,thumbnail,timing}) {
  return (
    <div className='w-100 border-1 border-gray-300 rounded-md shadow-md'>
        <img src={thumbnail} className='p-4' />
        <h1 className='text-2xl ml-4'>{title}</h1>
        <p className='ml-4 mt-1 text-lg '><ClockIcon/>{timing}</p>
        <p className='ml-4 mt-1 text-lg'>{channel}</p>
    </div>
  )
}

export default TvShowCard