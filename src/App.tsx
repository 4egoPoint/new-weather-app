


import { error, log } from 'console';
import './App.css';
import Cloud from './components/Cloud';
import Content from './components/Content';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Search from './components/Search';
import Sun from './components/Sun';
import { useState, useEffect } from "react"


const apiKey: string = "508105b0d2468eacc04c337659224a22"

export type WeatherDataType = {
   wind:number
   humidity:number
   temperature:number
   currentCity: string
   weatherIconId:string
}

function App() {
   const [inputValue, setInputValue] = useState<string>("")
   const [cityValue, setCityValue] = useState<string>("London")
   const [weatherData,setWeatherData] = useState<WeatherDataType>({
      wind:0,
      humidity:0,
      temperature:0,
      weatherIconId: "",
      currentCity: "London",
   })
   const [icon, setIcon] = useState("clear")
   const [isFound, setIsFound] = useState(true)



   useEffect(() => {
      const search = async () => {
         let data:any
         try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`)
            data = await response.json()
         }
         catch{
         }
         if (data.cod == 404) {
            setIsFound(false)
            return
         } else {
            setIsFound(true)
         }
         setWeatherData({
            wind: data.wind.speed,
            humidity: data.main.humidity,
            temperature: Number((data.main.temp - 273.15).toFixed(0)),
            //mainWeather: data.weather[0].main,
            currentCity: data.name,
            weatherIconId: data.weather[0].icon
         })
         
      }
      search()
   }, [cityValue])

   return (
      <div className="app">
         <div className="app__window">

            <Search inputValue={inputValue} setCityValue={setCityValue} setInputValue={setInputValue} />
            {
               isFound ? (
                  <>
                     <Content icon={icon} setIcon={setIcon} weatherIconId={weatherData.weatherIconId} temperature={weatherData.temperature} currentCity={weatherData.currentCity} />
                     <Details wind={weatherData.wind} humidity={weatherData.humidity} />
                  </>
               ) : (
                  <NotFound />
               )
            }

         </div>


         <Cloud />
         <Sun />
      </div>
   );
}

export default App;
