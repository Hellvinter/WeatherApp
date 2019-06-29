import {useState, useEffect} from "react"
import axios from "axios"

function useFetch(initUrl, initData) {
    const [data, setData] =useState(initData)

    useEffect(() => {
        const Fetch = async() => {
            const result = await axios(initUrl)
            setData(result.data)
        }
        Fetch()
    },[])

    return data
}

export default useFetch

// That a simple custom hook
// He's fetch data from any api I want casuse 
// that hook take params of initial url and data
// when it's called in react component
// for now it's don't handle an errors and don't display
// loading info or animation
// I will add that later
// for now it's simple as it can be
// but it's work perfectly for now

//CODE explination
// I import useState and useEffect without that hooks
// will not work
// and axios for fetching data
// then I create function it's custom hooks
// all custom hooks name must start from word use
// useFetch recieve two parameters
// it's initUrl and initData
// because of that params hook became reusable
// Then I declair const [data, setData] 
//with destructuring method and with asign to that
// const useState hook with param initData
// that param will be passed when our custom hook is called
// then I use useEffect to fetch data 
// and for url in axios use initUrl param
// that wai we can use any url in any component we need
// when coll useFetch function
// then for second param of useEffect 
//I use emty squere brackets for now
// letter i change it to query (that way it will change
// fetched data when query is changed)
