import { TechIcon } from "./TechIcon";
import { ComponentType } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
  reverse = false,
}: {
  toolboxItems: { name: string; iconType: ComponentType }[];
  className?: string;
  itemsWrapperClassName?: string;
  reverse?: boolean;
}) => {
  const items = reverse ? [...toolboxItems].reverse() : toolboxItems;

  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="inline-flex items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-xl transition-transform hover:scale-110 hover:-translate-y-1"
          >
            <div className="w-10 h-10">
              <TechIcon component={item.iconType} />
            </div>
            <span className="font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
