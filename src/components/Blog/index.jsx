import { useParams } from "react-router-dom";
// import { blogPosts } from "../../data/blogPosts";
import CommentSection from "../CommentSection";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { slugify } from "../../utils/slugify";

export default function Blog() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const blogPostsRef = collection(db, "blog-posts");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(blogPostsRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const post = {
            id: doc.id,
            ...doc.data(),
            slug: doc.data().slug || slugify(doc.data().title),
          };
          setBlog(post);
        } else {
          setBlog(null); // No post found
        }

        // const data = await getDocs(blogPostsRef);
        // const blogPosts = data.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        //   slug: doc.data().slug || slugify(doc.data().title),
        // }));
        // const post = blogPosts.find((p) => p.slug === slug); //this means that let the slug in the post's field be equal to the slug in the URL
        // setBlog(post);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, []);

  if (!blog) return <div className="p-10">Post not found.</div>;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10 mb-10">
        <h1 className="text-4xl font-bold mb-1">{blog.title}</h1>
        <div className="flex items-center justify-between text-sm mb-6">
          <p className="text-base">{blog.author}</p>
          <p className="text-secondary">{blog.date}</p>
        </div>

        <div className="relative">
          {blog.image?.src && (
            <img
              src={blog.image.src}
              alt={blog.image?.alt || blog.title}
              className="float-right ml-6 mb-4 w-100 h-72 object-cover rounded-md"
            />
          )}
          {blog.sections?.map((section, sIndex) =>
            section.paragraphs.map((text, pIndex) => (
              <p key={`${sIndex}-${pIndex}`} className="mb-4 text-justify">
                {text}
              </p>
            ))
          )}
        </div>
      </div>
      <CommentSection postSlug={blog.slug} />
    </div>
  );
}
