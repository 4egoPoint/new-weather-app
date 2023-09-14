

import { useState, useEffect } from "react"
import "./style/content.css"

type ContentDataType = {
   temperature: number
   currentCity: string
   weatherIconId: string
   icon:string
   setIcon: React.Dispatch<React.SetStateAction<string>>
}

const Content = ({ icon, setIcon, weatherIconId, temperature, currentCity }: ContentDataType) => {

   if (weatherIconId === "02d" || weatherIconId === "02n") {
      setIcon("mist")
   } else if(weatherIconId === "03d" || weatherIconId === "03n" || weatherIconId === "04d" || weatherIconId === "04n") {
      setIcon("drizzle")
   } else if(weatherIconId === "09d" || weatherIconId === "09n" || weatherIconId === "10d" || weatherIconId === "10n") {
      setIcon("rain")
   } else if(weatherIconId === "13d" || weatherIconId === "13n") {
      setIcon("snow")
   } else {
      setIcon("clear")
   }

   if (temperature >= 15) {
      let temp = document.getElementById('temperature')
      temp?.classList.remove("cold")
      temp?.classList.add("hot")
   } else if (temperature < 15) {
      let temp = document.getElementById('temperature')
      temp?.classList.remove("hot")
      temp?.classList.add("cold")
   }
   return (
      <div className="content">
         <img src={require(`../images/weather/${icon}.png`)} className="content__weather-img"></img>
         <div id="temperature" className="content__temperature ">{temperature}°C</div>
         <div className="content__city">{currentCity}</div>
      </div>
   )
}

export default Content