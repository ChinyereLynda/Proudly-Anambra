import { useEffect, useState } from "react";
import { ArrowCircleRight2, ArrowCircleLeft2 } from "iconsax-reactjs";
import WhatsHappeningCard from "../Card/WhatsHappeningCard";
// import { blogPosts } from "../../data/blogPosts";
import { Link } from "react-router-dom";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { slugify } from "../../utils/slugify";

export default function WhatsHappening() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const [blogPosts, setBlogPosts] = useState([]);
  const blogPostsRef = collection(db, "blog-posts");

  const fetchBlogPosts = async () => {
    //Read the data
    try {
      const data = await getDocs(blogPostsRef);
      const blogPosts = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        slug: doc.data().slug || slugify(doc.data().title),
      }));
      //Set the blog posts
      setBlogPosts(blogPosts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">What's Happening</h2>
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {currentItems.map((happening, index) => (
            <Link key={happening.id} to={`/blog/${happening.slug}`}>
              <WhatsHappeningCard happening={happening} />
            </Link>

            // <WhatsHappeningCard key={index} happening={happening} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`${
              currentPage === 0
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <ArrowCircleLeft2 size={32} variant="Bold" />
          </button>

          <span className="text-sm">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className={`${
              currentPage === totalPages - 1
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <ArrowCircleRight2 size={32} variant="Bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
