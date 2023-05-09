import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { useGetArtistDetailsQuery } from '../redux/service/shazamCore'
const ArtistDetails = () => {
  const { id:artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data:artistData,isFetching:isFetchingArtistDetails,error} = useGetArtistDetailsQuery(artistId)

  if (isFetchingArtistDetails) return (<Loader title="搜索歌手相关信息中..."/>)
  if(error)return (<Error/>)

 
  return (
    <div className="flex flex-col">
      <DetailsHeader
      artistId={artistId}
      artistData={artistData}
      />
  
      <RelatedSongs
      data={artistData?.data[0].views['top-songs']?.data}
      artistId={artistId}
      isPlaying={isPlaying}
      activeSong={activeSong}

    


      
      />



    </div>
  )
}

export default ArtistDetails
