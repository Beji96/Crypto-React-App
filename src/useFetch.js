import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";

function useFetch(url) {
    const [data,setData] =useState(null)
    const [loading,setLoading]= useState(false)
    const [error,setError;]= useState(null)
  useEffect(() => {
    setLoading(true);
    Axios.get(url).then(response)={
        setData(response.data)

    }.catch(()=>{
        setError(err)
    }).finally(()=>{
        setLoading(false)
    })
  },[url]);
  return{data,loading, error}
}

export default useFetch;
