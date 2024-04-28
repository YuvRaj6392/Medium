//When the user hits this page he should see the skeleton but on the second time he should see the content immediately as the details got cached
//for caching we are going to use the concept of atoms
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from 'react-router-dom';

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

export default function Blog() {

  const { id } = useParams();

  const { loading, blog } = useBlog({id:id || ""});

  
  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="flex-col justify-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  return (

    <>
    {
        blog && (
            <FullBlog authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"24-12-11"}/>
        )
    }
    
    
    </>

  );
}
