import axios from "axios";
import { useEffect, useState } from "react"

const useFetch=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
        fecthData();
    },[])
    const fecthData= async ()=>{
        const responce =await axios("https://jsonplaceholder.typicode.com/users/2")
        const data=await responce.data
        setData(data)
    }

    return data;
}
export default useFetch;