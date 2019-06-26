import React, {useState, useEffect} from "react";
import axios from "axios"

function DailyTemp() {
  //initialise state
  const person = {character : []}
  const initUrl = "http https://swapi.co/api/people/1"
  const[data, setData] = useState(person)
  console.log(data)
  console.log(data.character.name)

  useEffect(() => {
    const Fetch = async() => {
      const result = await axios(initUrl)
      setData(result.data)
    }
    Fetch()
  },[]) 

  return (
    <div>
      <h1>Hi</h1>
      {data.character.map(item => (
        <h2>{item.name}</h2>
      ))}
    </div>
  )
};

export default DailyTemp;

// This component will recieve data from source API
// then it display all we want on the screen

// 0. Import useState, useEffect and axios //Done
// 1. I need to set state with Hook (useState)
// 2. I need state for data, url, loading state,
// and error state
// last two it's additional state
// add them after you check that Hook is working
// .3 I need to use useEffect to fetch data from Api
// create function within useEffect 
// which will take param async()
// then wrote body of functiong 
// with setting url in await axios
// and set data
// .4 create const which will contain JSX markup
// for render our data
// also in that const we get access to our fetched data
// in order to display them
// 5. call const with JSX in return
// pass to this const arguments data isLoading and isError
// 6. Realise that all those thing doesn't work
// 7. Cry in loud
// 8. Fix all that mess... somehow
// 9. Document your code while writing 
// maybe good idea came to your head while you reviewing 
// you code 

// I will all the code down below in comments
// First I copy pice of code
// Then I explain it
// I do that in order keep code it self clean and readable

//CODE: 
//const [temp, setTemp] = useState([{ starship: {} }]);
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
// I pass parametr starship that 
// replace ships state within
// function. It's won't work until
// ships will be mapped on return of this function component
// with method .map
// and one of parametr of map will be starship, second index
// with that we can iterate through our array and display items
// with certain order
