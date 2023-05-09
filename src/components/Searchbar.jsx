import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {FiSearch} from 'react-icons/fi'

const Searchbar = () => {

  const navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }







  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="
    p-2 text-gray-400
    focus-within:text-gray-600"
    >
      <label htmlFor="serach-field" className="sr-only">
        搜索所有歌曲
      </label>
      <div className="flex flex-row justify-start items-center">
      <FiSearch className="h-5 w-5 ml-4"/>
      <input type="text"name="serach-field" autoComplete="off" id="serach-field"
      placeholder="搜索一些歌曲"
      value={searchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}
      className="flex-1 bg-transparent border-none outline-none
      placeholder-gray-500
      text-base text-white
      p-4
      "
      />

      </div>
    </form>
  )
}

export default Searchbar
