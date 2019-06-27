import React from "react"
import useFetch from "./utils/useFetchHook"

function Child() {
    const initUrl = "http://api.apixu.com/v1/current.json?key=b2c39fc02e2844cfa9562014192606&q=vancouver"
    const loc =  []
    const location = useFetch(initUrl, loc)
    console.log(location)
    console.log(location.location)
    console.log(location.current)

    

   return (
       <div>
           <h2>I am</h2>
           <p>{location.name}</p>
       </div>
   ) 
}

export default Child