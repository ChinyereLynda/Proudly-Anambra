import { ArrowCircleRight2 } from "iconsax-reactjs";

export default function WhatsHappeningCard({ happening }) {
  return (
    <div className="flex flex-col items-center bg-background rounded-3xl overflow-hidden gap-2">
      <div className="w-full h-50 bg-gray-200 flex items-center justify-center">
        {happening.image?.src ? (
          <img
            src={happening.image.src}
            alt={happening.image.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>
      <div className=" flex flex-col gap-y-2 md:flex-row md:justify-between p-4 w-full">
        <p className="font-bold text-sm">{happening.title}</p>

        <div>
          <ArrowCircleRight2 variant="Bold" className="text-black" size={24} />
        </div>
      </div>
    </div>
  );
}
