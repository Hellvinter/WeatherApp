import React, {useState} from "react";
import useFetch from "./utils/useFetchHook";

function CurrentWeather() {
    //set query in order to add interactive behavior
    const [query, setQuery] = useState("vancouver");
    // const loc create object which will contain data
    // then I pass it like param in useFetch
    // const place receive and store data from useFetch hook
    const initialUrl = `https://api.apixu.com/v1/current.json?key=b2c39fc02e2844cfa9562014192606&q=${query}`;
    const loc =  {current: [], location : []};
    // by some reasonse I must pass {data} in that particular
    // scenario for now I dont know why it's work that way
    // need to read about that    
    const [{data, isError}, changeQuery] = useFetch(initialUrl, loc);
    
    
    // stuff below display data and whatever we want
    // JavaScript must be written in curly brackets
    // or it will interpreted litteraly by JSX
    // data.location.country will be explained below
   return (
       <main className="weather_body">
            <h1 className="weather_heading">
                Find out your local weather
            </h1>
            {isError && <h3 className='weather_data'>Ooops something goes wrong...</h3>}
            <div className="weather_data">
                <h2>Location</h2>
                <p 
                className="weather_data-info">
                Country: {data.location.country}
                </p> 
                <p className="weather_data-info">
                City: {data.location.name}
                </p>
                <h2>Weather</h2>
                <p 
                className="weather_data-info">
                Temperature: {data.current.temp_c} celsius
                </p>
                <p 
                className="weather_data-info">
                Wind: {data.current.wind_kph} 
                k/h {data.current.wind_dir} 
                </p>
            </div>
            <form
            className="weather_search"
            onSubmit={event => {
                changeQuery(initialUrl);
                event.preventDefault()
            }}
            >
                <input
                onChange={event => setQuery(event.target.value)}
                className="weather_search-text" 
                type="text" placeholder="Choose city"   
                />
                <button 
                className="weather_search-btn" 
                type="submit">
                Search
                </button>
            </form>
       </main>
   ); 
}

export default CurrentWeather;

// This whole componennt take data from apixu.com API 
// by using custom fetch hook and then display it

// Explanation
// This component display weather data on screen
// But before it display it it use custom hook useFetch
// Take data from an API and only then display it
// we grand access to data with object methods with dot notation
// first we take const contain data : {data} then add dot to it
// like this {data}.
// then we need go further in our object we need take access
// to nested object so after dot we writting name of that child object
// data.current for example
// then we need take value of particular key so
// we writte a name of key which value we needed
// like this data.current.temp_c and than data displayed 
// to screen

// I add query state in order to create some interactive action
// and ability to check weather in city you want
// I made it by onChange and onSubmit events in form
// onChange event setQuery in [query, setQuery]
// and onSubmit update our initialUrl so displayed data
// is changed by our demand  