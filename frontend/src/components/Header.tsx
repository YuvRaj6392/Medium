import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export default function Header() {
  return (
    <div className="border-b flex justify-between items-center px-10 py-2">
      <div className="font-extrabold text-2xl">
     <Link to="/blogs">  MeDium </Link>
      </div>
      <div>
        <Avatar name={"yuvraj"}/>
      </div>

    </div>
  )
}
