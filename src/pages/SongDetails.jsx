import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/service/shazamCore'
const SongDetails = () => {
  const { songid } = useParams()

  const dispatch = useDispatch()
  const {isPlaying,activeSong}  = useSelector((state) => state.player)
  const {data:songData,isFetching:isFetchSongsDetails} = useGetSongDetailsQuery({songid})
  const {data,isFetching:isFetchRelatedSongs,error} = useGetSongRelatedQuery({songid})
  
  if (isFetchSongsDetails || isFetchRelatedSongs) return (
    <Loader title='Search song detail '/>
  )
  if (error) return <Error/>
  const handlePauseClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }
 
  return (
    <div className="flex flex-col">
      <DetailsHeader
      artistId=""
      songData={songData}
      />
      <div className="mb-10">
        <h2 className="text-white text-xl font-bold">Lyrics:</h2>
        <div className='mt-5'>
          {songData?.sections[1].type === 'LYRICS' ?
        songData?.sections[1].text.map((line,i)=>(
          <p  className="text-gray-400 text-base my-1">{line}</p>
        )) :(<p className='text-gray-400 text-base '>Sorry no lyrics</p>)
        }


        </div>
      </div>

      <RelatedSongs
      data={data}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}

      
      />



    </div>
  )
}

export default SongDetails
