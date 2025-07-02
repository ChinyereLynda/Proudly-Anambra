import { useState } from "react";
import {ArrowCircleRight2} from "iconsax-reactjs"

const items = [
  { title: "Vote for your favourite player", tag: "NEWS" },
  { title: "Vote for your favourite player", tag: "NEWS" },
  { title: "Vote for your favourite player", tag: "NEWS" },
];

const slides = [
  {
    image: "/assets/proudly_anambra_guy.png",
    tag: "News",
  },
  {
    image: "",
    tag: "News",
  },
  {
    image: "/assets/proudly_anambra_guy.png",
    tag: "Update",
  },
];

export default function Featured() {
  const [activeCard, setActiveCard] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative pt-15 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 min-h-120">
          {/* Left Column: Interactive Info Cards */}
          <div className="h-full flex flex-col justify-between">
            {items.map((item, index) => {
              const isActive = index === activeCard;
              return (
                <div
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`min-h-34 cursor-pointer flex justify-between items-center px-6 py-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-black"
                      : "bg-background"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p
                      className={`text-base mt-1 ${
                        isActive ? "text-black/60" : "text-[#989898]"
                      }`}
                    >
                      {item.tag}
                    </p>
                  </div>
                  <ArrowCircleRight2 variant="Bold"
                    size={24}
                    className={`${isActive ? "text-white" : "text-black"}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Slide */}
          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-full"
            style={{ backgroundImage: `url('${currentSlide.image}')` }}
          >            

            {/* Content */}
            <div className="relative z-20 w-full h-full p-6 flex flex-col">
              <div className="font-semibold text-white text-2xl mb-2">Vote for your favourite player</div>
              <div className="text-[#989898] text-base py-1">
                {currentSlide.tag}
              </div>
              
              {/* Carousel dots */}
              <div className="">
                <div className="absolute left-8 bottom-12 flex items-center gap-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeSlide ? "bg-primary" : "bg-white/50"
                    }`}
                  />
                ))}
                </div>

                {/* Arrow Right */}
                <div className="absolute bottom-10 right-12 z-30">
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={nextSlide}
                  >
                    <ArrowCircleRight2 variant="Bold" className="text-black" size={24} />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
