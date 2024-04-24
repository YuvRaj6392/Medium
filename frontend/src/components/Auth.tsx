import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signupSchema } from "@yuvraj6392/medium-common";

export default function Auth({type}:{type:"signup"|"signin"}) {

 const [postInputs,setPostInputs]=useState<signupSchema>({
  name:"",
  email:"",
  password:""
 })

  return (
   <div className="flex flex-col justify-center items-center p-5 h-full sm:h-screen">
        <div className="w-[80%] sm:w-[60%]">
        <div className="font-bold text-xl sm:text-3xl text-center" >
          Create an account
        </div>
        <div className="text-slate-400  text-sm sm:text-xl text-center">
         Already have an account? <Link to="/signin" className="underline text-blue-500 font-bold"> Login </Link>
        </div>

        <LabelledInput type="text" label="Name" placeholder="John Doe" onChange={(e)=>{
        setPostInputs(c=>(
         {
          ...c,
          name:e.target.value
         }
        ))
        }} />

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
    return <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
}