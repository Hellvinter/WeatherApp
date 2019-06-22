import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

// This component its  a core of App
// It's contain all our components
// And then iur index.js take all of this
// stuff and render in div with id="root"
// After that magic hapens and all our code
// displayed on screen

//Daily component
// First call state of DailyTemp function then .map it
// pass parameters starship and index in order to take data from
// object and iterate through different object childs
// then call DeathStar const and pass arguments to it key=index
// index=index, starship=starship, then magic happen
