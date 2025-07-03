import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./components/Pages/HomePage";
import BlogPost from "./components/Pages/BlogPost";
import BlogPostUpload from "./components/Pages/BlogPostUpload";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blogpostupload" element={<BlogPostUpload />} />
        </Route>
      </Routes>
    </Router>
  );
}
