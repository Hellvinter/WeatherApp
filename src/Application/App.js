import React  from "react";

import CurrentWeather from "./Current";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
    
  );
}

export default App;

// This component its  a core of App
// It's contain all our components
// And then our index.js take all of this
// stuff and render in div with id="root"
// After that magic hapens and all our code
// displayed on screen
