import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Loader,Error, SongCard} from '../components';
import { useGetTopChartsQuery } from '../redux/service/shazamCore';


const TopCharts = () => {


    const {activeSong,isPlaying} = useSelector((state)=>state.player)
    const {data,isFetching,error} = useGetTopChartsQuery()

    if(isFetching ) return <Loader title="等吧"/>
    if(error ) return (<Error/>)

  return (
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white 
      text-left
      mt-4 mb-10
      '>唱片排行榜
      
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center 
      gap-8
      '>
        {data?.map((song,i)=>(
          <SongCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong} 
          data={data}
          />
        ))}
      </div>

    </div>
  )


}

export default TopCharts;
