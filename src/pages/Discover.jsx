import { useDispatch,useSelector } from "react-redux";
import { Error,Loader,SongCard } from "../components";
import {genres} from '../assets/constants'
import {useGetSongsByGenreQuery, useGetTopChartsQuery} from '../redux/service/shazamCore'
import { selectGenreListId } from "../redux/features/playerSlice";


const Discover = () =>{
  const dispatch = useDispatch()
  const {activeSong,isPlaying,genreListId} = useSelector((state)=>state.player)
  const {data,isFetching,error} = useGetSongsByGenreQuery(genreListId||'POP')

  
  const generTitle =  genres.find(({value})=>value ===genreListId)?.title || 'POP'

  if (isFetching) return (
    <Loader title="Loading songs..."/>
  )

  if (error) return (
    <Error/>
  )

  return (
  
    <div className="flex  flex-col ">
        <div className="w-full   flex   justify-between  items-center
        sm:flex-row  flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">Discover {generTitle}</h2>
          <select
          value={genreListId || 'pop'}
          onChange={(e)=>dispatch(selectGenreListId(e.target.value))}
          className="bg-black text-gray-300 p-3 outline-none text-sm
          rounded-lg sm:mt-3 mt-5
          "
          >
            {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title }</option>)}
          </select>

        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">



         {data?.map((item,i)=>(
           <SongCard 
           key={item.key}
           song={item}
           data = {data}
           isPlaying = {isPlaying}
           activeSong = {activeSong}
           i={i}
           
           />
         ))}

        </div>

    </div>
  )
}

export default Discover;
