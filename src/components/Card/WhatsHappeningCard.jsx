import { ArrowCircleRight2 } from "iconsax-reactjs";

export default function WhatsHappeningCard({ happening }) {
  return (
    <div className="flex flex-col items-center bg-background rounded-3xl overflow-hidden gap-2">
      <img
        src={happening.image.src}
        alt={happening.image.alt}
        className="h-3/5 w-full object-cover"
      />
      <div className=" flex flex-col gap-y-2 md:flex-row md:justify-between p-4 w-full">
        <p className="font-bold text-sm">{happening.name}</p>

        <div>
          <ArrowCircleRight2 variant="Bold" className="text-black" size={24} />
        </div>
      </div>
    </div>
  );
}
