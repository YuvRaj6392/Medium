import { atom } from "recoil";

export const blogItem=atom({
 key:'blogAtom',
 default:{
   title:"",
   content:""
 }
})