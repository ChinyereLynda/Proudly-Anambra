import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import BlogPostUploader from "../BlogPostUploader";

export default function EditBlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [docId, setDocId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const q = query(collection(db, "blog-posts"), where("slug", "==", slug));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("Post not found.");
        return navigate("/");
      }

      const docSnap = snapshot.docs[0];
      setDocId(docSnap.id);
      setPost({ id: docSnap.id, ...docSnap.data() });
      setLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  const handleUpdate = async (updatedPost) => {
    if (!docId) return alert("Missing Firestore ID for update.");
    const postRef = doc(db, "blog-posts", docId);
    try {
      await updateDoc(postRef, updatedPost);
      alert("Post updated successfully!");
      navigate(`/blog/${slug}`);
    } catch (err) {
      console.error("Error updating blog post:", err);
      alert("Failed to update blog post. Please try again.");
    }
  };

  if (loading) return <p className="p-6">Loading post...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <BlogPostUploader existingPost={post} onSubmit={handleUpdate} />
    </div>
  );
}
