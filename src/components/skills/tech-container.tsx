"use client";

import { TechnologyCategory } from "@/types/technology-category";
import TechCard from "./tech-card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TechContainer({
  techCategories,
}: {
  techCategories: TechnologyCategory[];
}) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center self-center">
      {techCategories.map((techCategory, index) => (
        <div
          key={techCategory.name}
          className="group relative block h-[360px] w-[320px] p-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-muted"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <TechCard techCategory={techCategory} />
        </div>
      ))}
    </div>
  );
}
