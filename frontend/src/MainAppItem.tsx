
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { PrivateRouter } from "./functions/PrivateRouter";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Error from "./pages/Error";

export default function MainAppItem() {
  const showHeader = !["/signin", "/signup"].includes(window.location.pathname);

  return (
    <Router>
      {showHeader && <Header />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route element={<PrivateRouter />}>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Route>

        <Route path="*" element={<Error/>}/>

      </Routes>
    </Router>
  );
}