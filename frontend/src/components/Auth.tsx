import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signupSchema } from "@yuvraj6392/medium-common";
import axios from "axios";
import { DATABASE_URL } from "../Config";

export default function Auth({ type }:{type:"signup"|"signin"}) {

  const [inAction,setInAction]=useState(false);


 const [postInputs,setPostInputs]=useState<signupSchema>({
  name:"",
  email:"",
  password:""
 })


 async function sendRequest(){
  try{
    setInAction(true)
    const response = await axios.post(`${DATABASE_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
    const jwt=await response.data.jwt;
    localStorage.setItem("token",jwt)
    setInAction(false)
    window.location.href="/blogs"

  }catch(err){
    setInAction(false)
    alert( `Error while doing ${type==="signup"?"signup":"signin"}`)
  }

 }

 
 
  return (
   <div className="flex flex-col justify-center items-center p-5 h-full sm:h-screen">
        <div className="w-[80%] sm:w-[60%]">
        <div className="font-bold text-xl sm:text-3xl text-center mb-2" >
          {type==="signin"?"Login":"Create an account"}
        </div>
        <div className="text-slate-400  text-sm sm:text-xl text-center mb-10">
         {type==="signup"?"Already have an account?":"Don't have an account"} <Link to={type==="signup"?"/signin":"/signup" } className="underline text-blue-500 font-bold"> {type==="signup"?"Login":"Signup"} </Link>
        </div>

        {type==="signup"? <LabelledInput type="text" label="Name" placeholder="John Doe" onChange={(e)=>{
        setPostInputs(c=>(
         {
          ...c,
          name:e.target.value
         }
        ))
        }} />:<></>}

       <LabelledInput type="text" label="Username" placeholder="johndoe@gmail.com" onChange={(e)=>{
        setPostInputs(c=>(
         {
          ...c,
          email:e.target.value
         }
        ))
        }} />


        <LabelledInput type="password" label="Password" placeholder="**********" onChange={(e)=>{
        setPostInputs(c=>(
         {
          ...c,
          password:e.target.value
         }
        ))
        }} />

<button
  onClick={sendRequest}
  type="button"
  className={`p-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 ${
    inAction ? 'pointer-events-none' : ''
  } dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
>
  {type === 'signup' ? (
    inAction ? 'creating...' : 'Signup'
  ) : (
    inAction ? 'SigningIn...' : 'Signin'
  )}
</button>


        </div>
    </div>
  )
}

interface labelInputType{
 label:string;
 placeholder:string;
 onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
 type:string
}


function LabelledInput({label,placeholder,onChange,type}:labelInputType){
    return <div className="my-4"> 
          <label className="block mb-2 text-sm font-bold text-slate-950 dark:text-white">{label}</label>
            <input type={type} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
}