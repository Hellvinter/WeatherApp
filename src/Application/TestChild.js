import React from "react"
import useFetch from "./utils/useFetchHook"

function Child() {
    const inititalUrl = "http://api.apixu.com/v1/current.json?key=b2c39fc02e2844cfa9562014192606&q=beijing"
    const loc =  {current: [], location : []}
    const place = useFetch(inititalUrl, loc)
    //console.log(place)
    //console.log(place.current)
    //console.log(place.current.temp_c)
    //console.log(place.location)
    //console.log(place.location.name)

    

   return (
       <div>
            <h1> Hi again</h1>
            <h2> I am a version with reusable hook </h2>
            <h2>I am</h2>
            <p>{place.location.name}</p>
            <h2>My temperature are</h2>
            <p>{place.current.temp_c}</p>
       </div>
   ) 
}

export default Child