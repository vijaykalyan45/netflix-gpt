import { useEffect, useState } from "react"

const useIsUserOnline=()=>{

    const [userOnline,setUserOnline]=useState(true);
useEffect(()=>{
    window.addEventListener("online",()=>{
        setUserOnline(true)
    })
    window.addEventListener("offline",()=>{
        setUserOnline(false)
    })
},[])


return userOnline;
}
export  default useIsUserOnline;