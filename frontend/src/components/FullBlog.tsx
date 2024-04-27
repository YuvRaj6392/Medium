import { Avatar, blogCardProps } from "./BlogCard";



export default function FullBlog({ authorName, title, content, publishedDate }: blogCardProps) {

  return (
    <div className="flex flex-col sm:flex-row sm:p-20 p-10 gap-y-20 ">

      <div className="sm:w-4/5 w-full ">

        <div className="flex flex-col space-y-5">
          <div className="font-extrabold  text-4xl sm:text-5xl">
            {title}
          </div>
          <div className="font-thin text-sm text-gray-500">
            <span>Posted on {publishedDate}</span>
          </div>
          <div className="text-2xl font-normal">
            {content}
          </div>
        </div>

      </div>

      <div className="sm:w-1/5 w-full flex flex-col space-y-3 ">

        <div className="className=text-2xl font-normal">
          Author
        </div>

        <div className="flex justify-start items-center font-extrabold  text-sm gap-2">
          <div>
          <Avatar name={authorName}/>
          </div>
          <div>
          {authorName}
          </div>
          
        </div>

        <div className="text-l font-normal">
          Master of mirth, purveyor of puns, and the funniest person in the kingdom
        </div>
      </div>
    </div>
  );
}