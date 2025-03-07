import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Scalable",
  "Reliable",
  "Secure",
  "Efficient",
  "User-Friendly",
  "Responsive",
  "Intuitive",
  "Interactive",
  "Dynamic",
  "Robust",
  "Modern",
  "Clean",
  "Elegant",
  "Fast",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4">
            {new Array(2).fill(0).map((_, index) => (
              <div key={index} className="flex flex-none gap-4">
                {words.map((word) => (
                  <div
                    key={word}
                    className="inline-flex items-center gap-4 text-4xl animate-move-left animation-duration-[30s]"
                  >
                    <span className="text-gray-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-950 -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
