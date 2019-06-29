import React  from "react";

import CurrentWeather from "./Current"

function App() {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
    
  )
}

export default App;

// This component its  a core of App
// It's contain all our components
// And then our index.js take all of this
// stuff and render in div with id="root"
// After that magic hapens and all our code
// displayed on screen

//Daily component
// First call state of DailyTemp function then .map it
// pass parameters starship and index in order to take data from
// object and iterate through different object childs
// then call DeathStar const and pass arguments to it key=index
// index=index, starship=starship, then magic happen

//Stuff you written above...
// Dude how dum I can be sometime
// You need to create const with jsx markup inside DailyTemp
// and pass it within DailyTemp component in return
// In App you just call it
