import { useEffect, useState } from "react"
import axios from "axios"
import { DATABASE_URL } from "../Config"

export const useBlogs=()=>{
 const [loading,setLoading]=useState(true)
 const [blogs,setBlogs]=useState([])

 const loadingBlogs=async()=>{
  const response=await axios.post(`${DATABASE_URL}/api/v1/book/bulk`,null,{
    headers:{
     "authorization":localStorage.getItem("token")
    }
  })
  console.log(response.data)
  setBlogs(response.data)
  setLoading(false)
 }

 useEffect(()=>{
     loadingBlogs()
 },[])
 return {
  loading,
  blogs
 }
}