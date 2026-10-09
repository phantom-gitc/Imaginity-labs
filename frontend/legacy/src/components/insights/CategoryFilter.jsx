import React from 'react';
import { motion } from 'framer-motion';

export function CategoryFilter({ categories, activeCategory, onSelectCategory, articleCounts }) {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = articleCounts[cat];

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`relative px-4 py-2.5 rounded-full text-[13px] font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-[#0A0A0F] text-white border-[#0A0A0F] shadow-sm'
                  : 'bg-white text-[#4A4F5C] border-[#E6E8EE] hover:border-[#CBD5E1] hover:text-[#0A0A0F]'
              }`}
            >
              <span>{cat}</span>

              {count !== undefined && count > 0 && (
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F0F4FF] text-[#2F5BFF]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
