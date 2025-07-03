import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) return;

    const newComment = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="border-t border-primary pt-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-secondary">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-secondary">
            Comment
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your comment here..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-primary rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div className="text-sm text-secondary font-semibold">
                {comment.name}
              </div>
              <div className="text-xs text-secondary mb-1">{comment.date}</div>
              <p className="text-sm">{comment.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm">No comments yet. Be the first!</p>
      )}
    </div>
  );
}
