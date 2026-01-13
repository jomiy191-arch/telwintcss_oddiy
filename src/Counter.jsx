import React, { useState } from "react";

const GalleryWithFade = () => {

  const images = [
    { src: "SENING_RASM_1_URL", name: "Rasm 1" },
    { src: "SENING_RASM_2_URL", name: "Rasm 2" },
    { src: "SENING_RASM_3_URL", name: "Rasm 3" },
    { src: "SENING_RASM_4_URL", name: "Rasm 4" },
    { src: "SENING_RASM_5_URL", name: "Rasm 5" }
  ];

  const [selected, setSelected] = useState(images[0]);
  const [fade, setFade] = useState(true);

  const handleSelect = (img) => {
    setFade(false); // fade out
    setTimeout(() => {
      setSelected(img); 
      setFade(true);   // fade in
    }, 300); // duration bilan mos
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      
      {/* 🔹 Katta rasm container */}
      <div className="relative w-full max-w-6xl h-96 md:h-[500px] mb-6 rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={selected.src}
          alt={selected.name}
          className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        />

        {/* 🔹 Thumbnail strip overlay pastda */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 py-3 px-4 flex space-x-4 overflow-x-auto backdrop-blur-sm rounded-t-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.name}
              className={`flex-shrink-0 w-24 h-16 md:w-28 md:h-20 object-cover cursor-pointer rounded-xl border-2 border-white transition-all duration-300
                ${selected.src === img.src 
                  ? "ring-4 ring-blue-400 scale-110 shadow-lg" 
                  : "hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-blue-200"} `}
              onClick={() => handleSelect(img)}
            />
          ))}
        </div>
      </div>

      {/* 🔹 Rasm nomi */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
        {selected.name}
      </h2>
    </div>
  );
};

export default GalleryWithFade;
