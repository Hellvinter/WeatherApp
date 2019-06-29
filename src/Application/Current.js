import React from "react"
import useFetch from "./utils/useFetchHook"

function CurrentWeather() {
    const inititalUrl = "http://api.apixu.com/v1/current.json?key=b2c39fc02e2844cfa9562014192606&q=beijing"
    const loc =  {current: [], location : []}
    const place = useFetch(inititalUrl, loc)
    //console.log(place)
    //console.log(place.current)
    //console.log(place.current.temp_c)
    //console.log(place.location)
    //console.log(place.location.name)

    

   return (
       <main className="weather_body">
            <h1 className="weather_heading">
                Find out your local weather
            </h1>
            <div className="weather_data">
                <h2>Location</h2>
                <p className="weather_data-info">
                    Country: {place.location.country}
                </p> 
                <p className="weather_data-info">
                    City: {place.location.name}
                </p>
                <h2>Weather</h2>
                <p className="weather_data-info">
                    Temperature: {place.current.temp_c} celsius
                </p>
                <p className="weather_data-info">
                    Wind: {place.current.wind_kph} {place.current.wind_dir} 
                </p>
            </div>
       </main>
   ) 
}

export default CurrentWeather