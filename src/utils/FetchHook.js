import React, { useState, useEffect } from "react";
import axios from "axios"


const useDataHook = () => {
  const [data, setData] = useState({data: []})
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const takeData = async() => {
      setIsLoading(true)
      const result = await axios(url)
    }
    setData(result.data)
    setIsLoading(false)
  })

  return [{data, isLoading}, setUrl]
}

export default FetchHook;

