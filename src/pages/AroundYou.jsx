import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader,Error, SongCard} from '../components';
import { useGetSongsByCountryQuery } from '../redux/service/shazamCore';


const AroundYou = () => {

    const [country,setCountry] = useState('')
    const [loading,setLoading] =useState(true)
    const {activeSong,isPlaying} = useSelector((state)=>state.player)
    const {data,isFetching,error} = useGetSongsByCountryQuery(country)

      // console.log(data);
      // api 跨域 完成不了...............
    // if(isFetching && loading) return <Loader title="等吧"/>
    // if(error && country) return (<Error/>)






    useEffect(()=>{
      axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_h5NxvTp4rB2xN8Y9ZL0KxYDegrXSx').then((res)=>{
        setCountry(res?.data?.location?.country)
      })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))

    },[])

   





  return (
    <div className='flex flex-col '>
      <h2 className='font-bold text-3xl text-white 
      text-left
      mt-4 mb-10
      '>在你身边
      <span className='font-black ml-3'>{country}</span>
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

export default AroundYou;
