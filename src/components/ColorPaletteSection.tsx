
import React from 'react';

export default function ColorPaletteSection() {
  const colors = [
    {
      name: "Gold",
      hex: "#D4AF37",
      bgClass: "bg-precedential-gold",
      textClass: "text-precedential-black"
    },
    {
      name: "Black",
      hex: "#000000",
      bgClass: "bg-precedential-black",
      textClass: "text-precedential-white"
    },
    {
      name: "White",
      hex: "#FFFFFF",
      bgClass: "bg-precedential-white",
      textClass: "text-precedential-black",
      borderClass: "border border-gray-200"
    },
    {
      name: "Dark Navy",
      hex: "#0C1A2B",
      bgClass: "bg-precedential-navy",
      textClass: "text-precedential-white"
    }
  ];

  return (
    <section id="colors" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">Colors of Trust</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {colors.map((color, index) => (
            <div key={index} className="reveal-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`h-40 rounded-md ${color.bgClass} ${color.borderClass || ''} flex items-end mockup-shadow`}>
                <div className={`w-full py-3 px-4 rounded-b-md backdrop-blur-sm bg-white/20 ${color.textClass}`}>
                  <h3 className="font-bold">{color.name}</h3>
                  <p className="text-sm font-mono">{color.hex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-lg max-w-3xl mx-auto text-center reveal-on-scroll">
          These colors balance power, clarity, and warmth—mirroring our legal philosophy.
        </p>
      </div>
    </section>
  );
}
