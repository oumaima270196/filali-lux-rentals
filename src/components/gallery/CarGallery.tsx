// src/components/gallery/CarGallery.tsx
"use client";

import { useState } from "react";

type CarGalleryProps = {
  name: string;
  mainImage: string;
  gallery: string[];
};

export default function CarGallery({ name, mainImage, gallery }: CarGalleryProps) {
  const images = gallery && gallery.length > 0 ? gallery : [mainImage];
  const [activeImage, setActiveImage] = useState<string>(images[0]);

  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-yellow-500/20">
        <img
          src={activeImage}
          alt={name}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4 flex-wrap">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                activeImage === img
                  ? "border-yellow-400"
                  : "border-gray-800 hover:border-gray-600"
              }`}
            >
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}