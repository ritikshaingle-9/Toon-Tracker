import React, { useEffect,useState } from 'react'
import axios from "axios";
import TvShowCard from '../component/TvShowCard';

function Home() {
  const [tvShows, setTvShows]= useState([]);

  const loadTvShows = async ()=>{
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/TvShows`
    );
    setTvShows(response.data.data);
  };

   useEffect(()=>{
    loadTvShows();
  },[]);
  return (
    <div>
       <h1>Toon Tracker</h1>

       {tvShows.map((serialObj)=>{
        const {_id,title,timing,channel,thumbnail} = serialObj;

        return(
         <div className='m-5 inline-flex flex-row flex-wrap '><TvShowCard
         key={_id}
         _id={_id}
         title={title}
         timing={timing}
         channel={channel}
         thumbnail={thumbnail} 
         /></div>
        )
        }
       )}
    </div>
  )
}

export default Home