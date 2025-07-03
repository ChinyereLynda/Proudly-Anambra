import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import CommentSection from "../CommentSection";

export default function Blog() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="p-10">Post not found.</div>;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10 mb-10">
        <h1 className="text-4xl font-bold mb-1">{post.title}</h1>
        <div className="flex items-center justify-between text-sm mb-6">
          <p className="text-base">{post.author}</p>
          <p className="text-secondary">{post.date}</p>
        </div>

        <div className="relative">
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="float-right ml-6 mb-4 w-100 rounded-md"
          />
          {post.sections.map((section) =>
            section.paragraphs.map((text, index) => (
              <p key={index} className="mb-4 text-justify">
                {text}
              </p>
            ))
          )}
        </div>
      </div>
      <CommentSection />
    </div>
  );
}
