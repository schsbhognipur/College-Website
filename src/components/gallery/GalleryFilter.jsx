import { useState } from 'react';
import { galleryCategories } from '../../data/gallery';

export default function GalleryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {galleryCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-pill text-sm font-medium transition-all border ${
            active === cat
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
