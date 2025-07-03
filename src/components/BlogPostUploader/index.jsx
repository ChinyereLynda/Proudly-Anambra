import { useState } from "react";

export default function BlogPostUploader() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [sections, setSections] = useState([
    { id: 1, paragraphs: [""], hasImage: false },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleAddSection = () => {
    setSections((prev) => [
      ...prev,
      { id: prev.length + 1, paragraphs: [""], hasImage: false },
    ]);
  };

  const handleParagraphChange = (sectionId, index, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              paragraphs: section.paragraphs.map((p, i) =>
                i === index ? value : p
              ),
            }
          : section
      )
    );
  };

  const handleAddParagraph = (sectionId) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, paragraphs: [...section.paragraphs, ""] }
          : section
      )
    );
  };

  const toggleHasImage = (sectionId) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, hasImage: !section.hasImage }
          : section
      )
    );
  };

  const generateId = (title) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      id: generateId(title),
      title,
      author,
      date,
      name: title,
      image: {
        src: previewUrl || "/placeholder.png",
        alt: title,
      },
      sections,
    };

    console.log("Blog post object:", postData);

    // TODO: send to backend or Firebase

    alert("Post data logged in console.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold">Create Blog Post</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 p-2 border rounded"
            onChange={handleImageChange}
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Sections</h3>
        {sections.map((section, sIdx) => (
          <div key={section.id} className="p-4 border rounded space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Section {section.id}</h4>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={section.hasImage}
                  onChange={() => toggleHasImage(section.id)}
                />
                Has Image
              </label>
            </div>
            {section.paragraphs.map((p, i) => (
              <textarea
                key={i}
                className="w-full p-2 border rounded"
                rows={2}
                placeholder={`Paragraph ${i + 1}`}
                value={p}
                onChange={(e) =>
                  handleParagraphChange(section.id, i, e.target.value)
                }
              />
            ))}
            <button
              type="button"
              onClick={() => handleAddParagraph(section.id)}
              className="text-sm text-primary hover:underline"
            >
              + Add Paragraph
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSection}
          className="text-primary hover:underline"
        >
          + Add Section
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-[#f49e0b] text-white font-semibold rounded hover:bg-[#c97d08]"
      >
        Submit Blog Post
      </button>
    </form>
  );
}
