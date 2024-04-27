  import { useEffect, useState } from "react"
  import axios from "axios"
  import { DATABASE_URL } from "../Config"

  interface Blog{
    id:string,
    author:{
        name:string
    },
    title:string,
    content:string
  }

  export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
  const [blog,setBlog]=useState<Blog|null>(null)
  console.log(id)
  const loadingBlogs=async()=>{
    const response=await axios.get(`${DATABASE_URL}/api/v1/book/${id}`,{
      headers:{
      "authorization":localStorage.getItem("token")
      }
    })
    console.log(response.data)
    setBlog(response.data)
    setLoading(false)
  }

  useEffect(()=>{
      loadingBlogs()
  },[id])
  
  return {
    loading,
    blog
  }
  }


  export const useBlogs=()=>{ 
  const [loading,setLoading]=useState(true)
  const [blogs,setBlogs]=useState<Blog[]>([])

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