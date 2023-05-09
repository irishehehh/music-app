
import { Link } from "react-router-dom";

const DetailsHeader = ({artistId,artistData,songData}) => {



            



  return (
    <div className="relative flex w-full flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black 
      sm:h-48 h-28 
      "/>
      <div className="absolute inset-0 flex items-center ">
        <img 
        src={artistId ? artistData?.data[0]?.attributes?.artwork?.url
        
        :songData?.images?.coverart}
        
        alt="art" 
        className="sm:w-48 w-28 sm:h-48 h-28 
        object-cover border-2 shadow-xl shadow-black rounded-full
        "
        />
      <div className="ml-5 ">
        <p className=" text-white font-bold sm:text-3xl text-xl 
        
        
        ">{artistId ? artistData?.data[0]?.attributes?.name : songData?.title}</p>  
      {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-gray-400 text-base mt-2">{songData?.subtitle}</p>
          </Link>
      )}
      <p className="text-gray-400 mt-2 text-base ">
        {artistId ? artistData?.data[0]?.attributes?.genreNames[0]:
        songData?.genres?.primary
        }
  
      </p>
  
  
      </div>
  
      </div>
  
      <div className="w-full sm:h-44 h-24"/>
  
  
    </div>
  );
}




export default DetailsHeader;