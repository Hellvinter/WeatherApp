import {useState, useEffect} from "react"
import axios from "axios"

function useFetch(initUrl, initData) {
    const [data, setData] = useState(initData)
    const [url, setUrl] = useState(initUrl)

    useEffect(() => {
        const Fetch = async() => {
            const result = await axios(url)
            setData(result.data)
        }

        Fetch()
    },[url])

    return [{data}, setUrl]
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
// with destructuring method and with asign to that
// const useState hook with param initData
// that param will be passed when our custom hook is called
// then I use useEffect to fetch data 
// and for url in axios use initUrl param
// that wai we can use any url in any component we need
// when coll useFetch function
// then for second param of useEffect 
// I use emty squere brackets for now
// letter i change it to query (that way it will change
// fetched data when query is changed)


// Planning 
// Today 02.07.19 I need to improve that hook
// by adding to it ability to fetch data by demand
// for example it's will be search form 
// I need somehow give ability to change initialUrl
// for thea sake, I think need create one more const
// [url, setUrl] in order to have ability to change it
// apperently const with url is working
// so for now I fink that I need some how to pass 
// set url function to my Current component
// but how I will do it?
// maybe destructor and pass data as object and setUrl in 
// same array
// But then what?
// how I make it works
// it will be a part of useFetch anyway
// so can I just pass it like parametr
// WRONG
// I need use useState in Current component to set query
// also I need return setUrl in return of useFetchHooks
// then I need to change const place in Current a little bit
// like that [{data}, changeUrl] = useFetch(param1,param2)
// then change place on data everywhere or all things will broke
// and then I need to create form which will change query
// and in submit I call changeUrl so it change initUrl
// before that I need add onChange to input type="text"
// onChange={event => setQuery(event.target.value)}
// and in submit onSubmit={event => {
// changeUrl(url=${query}); event.preventDefault() (like that
// page don't reload)
//}}