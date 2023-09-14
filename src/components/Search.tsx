
import { BiSearchAlt } from "react-icons/bi"

import "./style/search.css"
import { useState } from "react"

type InputData = {
   setInputValue: React.Dispatch<React.SetStateAction<string>>
   setCityValue: React.Dispatch<React.SetStateAction<string>>
   inputValue: string
}

const Search = ({ setCityValue, setInputValue, inputValue }: InputData) => {
   const setCityString = () => {
      inputValue !== "" ? setCityValue(inputValue) : setCityValue("London")
   }
   console.log(inputValue);
   
   return (
      <div className="search">
         <input onChange={(e) => setInputValue(e.target.value)} className="search__input" type="text" placeholder='city...' />
         <button className="search__btn" onClick={setCityString}><BiSearchAlt /></button>
      </div>
   )
}

export default Search