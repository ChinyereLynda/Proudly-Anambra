import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-reactjs";
import { useState } from "react";

const images = [
  { src: "/assets/banner1.png", alt: "Chocolate bar with cocoa background" },
  { src: "/assets/banner2.png", alt: "Proudly brand hoodie model" },
  { src: "/assets/banner3.png", alt: "Original rice in Anambra packaging" },
  { src: "/assets/banner4.png", alt: "Bottled water with Anambra label" },
  { src: "/assets/banner5.png", alt: "Assorted snacks display" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  return (
    
    <div className="relative">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg transition duration-500"
      />

      {/* Buttons
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ArrowCircleLeft2 size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ArrowCircleRight2 size={24} />
      </button> */}

      {/* Dots */}
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#F49E0B]" : "bg-[#1E1E1E]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
