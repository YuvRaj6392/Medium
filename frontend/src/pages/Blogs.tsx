import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

// Create a Skeleton component
const Skeleton = () => (
  
<div role="status" className="w-full animate-pulse m-10">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[420px]"></div>
    <span className="sr-only">Loading...</span>
</div>



);

export default function Blogs() {
  const { loading, blogs } = useBlogs();

  // Render the skeleton loading effect if loading is true
  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="flex-col justify-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center">
        {blogs &&
          blogs.map((e) => {
            return (
              <BlogCard
                key={e.id}
                authorName={"Yuvraj"}
                title={e.title}
                content={e.content}
                publishedDate={"23.10.23"}
              />
            );
          })}
      </div>
    </div>
  );
}
