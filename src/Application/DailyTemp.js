import React, { useState } from "react";

const DailyTemp = () => {
  //Create State and Set it
  const [ships, setShips] = useState([{ starship: {} }]);
  console.log(ships);
  //Function will fetch data (with custom Hook called)
  const addShips = () => {};

  //Function wich recieve and display all data
  const DeathStar = starship => {
    return (
      <div>
        <h2>Name:{starship.name}</h2>
        <h3>Model:{starship.model}</h3>
        <p>Build on:{starship.manufacturer}</p>
      </div>
    );
  };
};

export default DailyTemp;

// This component will recieve data from source API
// then it display all we want on the screen

// 1.I need to set state with Hook
// 2. I need to create const wich will take param and
// then pass data from state to their JSX childs with this param
// 3. I need create const which will setState
// in this const I need to use custom Hook which will fetch data
// from a source API
// 4. After that I need to import all my code to App function
// 5. then I need call DailyTemp component in return of App
// other comments in App.js

// I will all the code down below in comments
// First I copy pice of code
// Then I explain it
// I do that in order keep code it self clean and readable

//CODE: const [temp, setTemp] = useState([{ starship: {} }]);
// First we create state Hook which wiil be contain
// data for us
// temp is our state
// setTemp is change state for us
// it's similar as this.setState
// then we asign initial state by using useState
// in brackets we contain object wraped into squфrу
// brackets otherwise JS don't allow contain object
// as parameter
// and we have key and value for that key is empty object
// cause we will recieve data as object and rewrite
// emptines with data

//CODE: Const DeathStar(change name later)
// recieve data and then display it
// is's our JSX markup
// I pass parametr starship that replace ships state within
// function. It's won't work until
// ships will be mapped on App component with method .map
// and one of parametr of map will be starship, second index
// with that we can iterate through our array and display items
// with certain order
