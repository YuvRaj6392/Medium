import { useSetRecoilState } from "recoil";
import { blogItem } from "../store/blogAtom";

export default function Publish() {
  const setBlog = useSetRecoilState(blogItem);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      title: e.target.value,
    }));
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      content: e.target.value,
    }));
  };
  

  return (
    <div className="p-10">
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          onChange={handleTitleChange}
        />
      </div>

      <div>
        <label htmlFor="content" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <textarea
          id="content"
          rows={8}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={handleContentChange}
        ></textarea>
      </div>
    </div>
  );
}
