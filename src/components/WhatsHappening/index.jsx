import { useState } from "react";
import { ArrowCircleRight2, ArrowCircleLeft2 } from "iconsax-reactjs";
import WhatsHappeningCard from "../Card/WhatsHappeningCard";

const whatsHappening = [
  {
    name: "Original Ricce in Anambra",
    image: "/products/rice.png",
  },
  {
    name: "Water in Anambra state",
    image: "/products/water.png",
  },
  {
    name: "Water in Anambra state",
    image: "/products/urwa.png",
  },
  {
    name: "Original Ricce in Anambra",
    image: "/products/royal.png",
  },
  {
    name: "Water in Anambra state",
    image: "/products/mojito.png",
  },
  {
    name: "Original tea in Anambra state",
    image: "/products/tea.png",
  },
  {
    name: "Original Ricce in Anambra",
    image: "/products/rice.png",
  },
  {
    name: "Water in Anambra state",
    image: "/products/water.png",
  },
  {
    name: "Water in Anambra state",
    image: "/products/urwa.png",
  },
];

export default function WhatsHappening() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(whatsHappening.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = whatsHappening.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {currentItems.map((happening, index) => (
            <WhatsHappeningCard key={index} happening={happening} />
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
