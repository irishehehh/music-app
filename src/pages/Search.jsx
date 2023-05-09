import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Loader,Error, SongCard} from '../components';
import { useGetSongsBySearchQuery } from '../redux/service/shazamCore';


const Search = () => {

  const {searchTerm} = useParams()

    const {activeSong,isPlaying} = useSelector((state)=>state.player)
    const {data,isFetching,error} = useGetSongsBySearchQuery(searchTerm)
    const songs = data?.tracks?.hits?.map((song)=>song.track)

    if(isFetching ) return <Loader title="等吧"/>
    if(error ) return (<Error/>)

  return (
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white 
      text-left
      mt-4 mb-10
      '>
      展示搜索结果<span className='font-black'>{searchTerm}</span>
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center 
      gap-8
      '>
        {songs?.map((song,i)=>(
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

export default Search;
