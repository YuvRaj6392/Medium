import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Error() {

 const history=useNavigate()

 useEffect(()=>{
  history('/blogs')
 })
  return (
    <>
      
    </>
  )
}
