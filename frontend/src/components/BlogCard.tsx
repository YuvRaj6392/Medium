import { Link } from "react-router-dom";

interface authorName {
 name: string;
}

export function Avatar({ name }: authorName) {
 return (
   <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
     <span className="font-medium text-gray-600  dark:text-gray-300">{name[0]}</span>
   </div>
 );
}

export interface blogCardProps {
id?:string
 authorName: string;
 title: string;
 content: string;
 publishedDate: string;
}

export default function BlogCard({ id, authorName, title, content, publishedDate }: blogCardProps) {
 return (
  <Link to={`/blog/${id}`}>
   <div className="border-b-2 border-blue pb-4 p-5 cursor-pointer">
     <div className="flex items-center gap-5">
       <Avatar name={authorName}/>
        <div className="font-light">
        {authorName} 
        </div>
        <div className="text-xs text-slate-400">
         &#9679;
        </div>
         <div className="font-thin text-slate-500">
         {publishedDate}
         </div>
     </div>
     <div className="font-semibold text-2xl mt-2">
       {title}
     </div>
     <div className="font-thin text-xl">
       {content.length < 100 ? content : content.slice(0, 100) + "..."}
     </div>
     <div className="text-slate-400 text-sm font-thin mt-2">
       {`${Math.ceil(content.length / 100)} minutes(s) read`}
     </div>
     
   </div>
   </Link>
 );
}
