import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function Signup() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
            <div className=" w-[100%] h-[70%] sm:h-[100%] sm:w-[50%] bg-slate-200 ">
            <Auth type={"signup"}/>
            </div>
            <div className="w-[100%]  h-[30%] sm:h-[100%] sm:w-[50%] bg-slate-400">
            <Quote/>
            </div>
    </div>
  )
}
