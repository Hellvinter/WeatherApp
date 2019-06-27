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

    return {...data}
}

export default useFetch