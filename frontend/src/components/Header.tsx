/* eslint-disable @typescript-eslint/no-var-requires */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useRecoilState} from "recoil";
import { blogItem } from "../store/blogAtom";
import { DATABASE_URL } from "../Config";
import axios from "axios";
import { useEffect, useState } from "react";
import logoutIcon from '../assets/noun-logout-638526.svg';

export default function Header() {
  const location = useLocation().pathname;
  const [toBePublishedBlog,setToBePublished]=useRecoilState(blogItem);
  const history=useNavigate()
  const [loading,setLoading]=useState(false)
  const token=localStorage.getItem("token")

  useEffect(()=>{
    if(!token){
      //did not use navigate to remove the networking payloads
      window.location.href="/signin"
    }
  },[token])
  
  const uploadBlog=async ()=>{
    
      if(toBePublishedBlog.title.length<=0 || toBePublishedBlog.content.length<=0){
        alert("Fill all the fields to publish")
      }
      else{
        setLoading(true)
        const response = await axios.post(`${DATABASE_URL}/api/v1/book`,
        toBePublishedBlog,
      {
        headers: {
          "authorization": localStorage.getItem("token")
        }
      })
        if(response.data){
          setToBePublished((data)=>({
            ...data,
            title:"",
            content:""
          }))
          history(`/blog/${response.data.id}`)
        }
        setLoading(false)
      }
      
  }


  return (
    <>
   
   {token && (
     <header className="border-b flex justify-between items-center px-10 py-2">
     <div className="font-extrabold text-2xl">
       <Link to="/blogs">MeDium</Link>
     </div>
     <div className="flex justify-center items-center gap-3">
     <div>
       {location === "/publish" ? (
           <button onClick={uploadBlog} type="button" className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2    ${loading ? 'pointer-events-none': 'pointer'}`}>Publish</button>
       ) : (
         <Link to="/publish">
           <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2">New</button>
         </Link>
       )}
       <Avatar name="yuvraj" />
       
     </div>
     <div style={{cursor:'pointer'}} onClick={()=>{
         localStorage.removeItem("token")
         window.location.href="/signin"
     }}>
     <img width={20}  src={logoutIcon} alt="Logout" />
     </div>
     </div>
   </header> 
   )}

    {
      loading && (
        <div>
          uploading....
        </div>
      )
    }

    </>
    
  );
}
