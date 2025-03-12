"use client";

import { ComponentType } from "react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

interface ToolboxItemsProps {
  toolboxItems: Array<{
    name: string;
    iconType: ComponentType;
  }>;
  className?: string;
  itemsWrapperClassName?: string;
  reverse?: boolean;
}

export const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
  reverse = false,
}: ToolboxItemsProps) => {
  const items = reverse ? [...toolboxItems].reverse() : toolboxItems;

  return (
    <div className={twMerge("flex", className)}>
      <div
        className={twMerge(
          "inline-flex gap-8 items-center",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-2 group"
            title={`${item.name} - Frontend Development Tool`}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <TechIcon component={item.iconType} />
            </div>
            <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors duration-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
