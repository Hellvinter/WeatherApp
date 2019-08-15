import {useState, useEffect} from "react";
import axios from "axios";

function useFetch(initUrl, initData) {
    const [data, setData] = useState(initData);
    const [url, setUrl] = useState(initUrl);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const Fetch = async() => {
            setIsError(false)

            try {
                const result = await axios(url)
                setData(result.data)
            } catch(error) {
                setIsError(true)
            }
        }

        Fetch()
    },[url])

    return [{data, isError}, setUrl];
}

export default useFetch;
