import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import BlogPostUploader from "../BlogPostUploader";
import { slugify } from "../../utils/slugify";

export default function CreateBlogPost() {
  const navigate = useNavigate();
  const blogPostsRef = collection(db, "blog-posts");

  const generateUniqueSlug = async (baseSlug) => {
    let slug = baseSlug;
    let counter = 1;
    while (true) {
      const q = query(blogPostsRef, where("slug", "==", slug));
      const snapshot = await getDocs(q);
      if (snapshot.empty) break;
      slug = `${baseSlug}-${counter++}`;
    }
    return slug;
  };

  const handleCreate = async (postData) => {
    const baseSlug = slugify(postData.title);
    const uniqueSlug = await generateUniqueSlug(baseSlug);

    const fullPost = {
      ...postData,
      slug: uniqueSlug,
    };

    try {
      const docRef = await addDoc(blogPostsRef, fullPost);
      navigate(`/blog/${uniqueSlug}`);
    } catch (err) {
      console.error("Error creating blog post:", err);
      alert("Failed to create blog post. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <BlogPostUploader onSubmit={handleCreate} />
    </div>
  );
}
