import { useParams, useNavigate, Link } from "react-router-dom";
// import { blogPosts } from "../../data/blogPosts";
import CommentSection from "../CommentSection";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { slugify } from "../../utils/slugify";
import { Edit } from "iconsax-reactjs";
import { authenticateBlogAdmin } from "../../utils/authcheck";

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const blogPostsRef = collection(db, "blog-posts");

  const handleEditClick = async () => {
    const result = await authenticateBlogAdmin();
    if (result.success) {
      navigate(`/edit/${blog.slug}`);
    }
  };

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
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading post...</div>;
  if (!blog) return <div className="p-10">Post not found.</div>;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10 mb-10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <button onClick={handleEditClick}>
            <Edit size="20" />
          </button>
        </div>
        {/* <h1 className="text-4xl font-bold mb-1">{blog.title}</h1> */}
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
