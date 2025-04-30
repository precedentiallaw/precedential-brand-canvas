
import React from 'react';

export default function LogoVariationsSection() {
  const variations = [
    {
      name: "Horizontal Logo",
      image: "/lovable-uploads/9954224c-5a1a-40d0-abaf-b9fa4b664494.png",
      bgColor: "bg-precedential-black"
    },
    {
      name: "Vertical Logo",
      image: "/lovable-uploads/e44c0ea9-f5e0-4e9d-b977-a54e93e9cb71.png",
      bgColor: "bg-precedential-black"
    },
    {
      name: "Icon Only",
      image: "/lovable-uploads/c50bf003-bf6a-4e4d-93cb-112f7b3c4657.png",
      bgColor: "bg-precedential-black"
    },
    {
      name: "Icon Greyscale",
      image: "/lovable-uploads/21ade783-4ee2-4d3d-9519-c5af480da598.png",
      bgColor: "bg-white"
    },
    {
      name: "Icon Monochrome",
      image: "/lovable-uploads/80e75a86-9b0e-4c7a-9673-689156a412b1.png",
      bgColor: "bg-white"
    }
  ];

  const exclusions = [
    {
      rule: "Don't stretch",
      example: "Distorting proportions compromises brand integrity"
    },
    {
      rule: "Don't rotate",
      example: "Keep logo in its original orientation"
    },
    {
      rule: "Don't recolor",
      example: "Only use approved color variations"
    },
    {
      rule: "Don't place on busy backgrounds",
      example: "Maintain clarity and visibility"
    },
    {
      rule: "Don't use icon where full logo is needed",
      example: "Follow usage guidelines for appropriate contexts"
    },
    {
      rule: "Don't add shadows or effects",
      example: "Keep the logo clean and authentic"
    }
  ];

  return (
    <section id="variations" className="py-20 px-4 bg-precedential-black text-precedential-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-precedential-gold reveal-on-scroll">Using It Right</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {variations.map((variant, index) => (
            <div key={index} className={`${variant.bgColor} p-6 rounded-md flex flex-col items-center justify-center reveal-on-scroll mockup-shadow`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-36 flex items-center justify-center">
                <img 
                  src={variant.image} 
                  alt={`Precedential ${variant.name}`} 
                  className="max-h-full max-w-full"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-precedential-gold">{variant.name}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-precedential-gold reveal-on-scroll">Do Not:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {exclusions.map((exclusion, index) => (
            <div key={index} className="bg-precedential-white/5 border border-precedential-gold/20 p-6 rounded-md reveal-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <h4 className="text-lg font-bold text-precedential-gold mb-2">{exclusion.rule}</h4>
              <p className="text-precedential-white/70 text-sm">{exclusion.example}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img 
            src="/lovable-uploads/80e75a86-9b0e-4c7a-9673-689156a412b1.png" 
            alt="Precedential Logo Mockup 4" 
            className="w-full h-auto rounded-md bg-precedential-white p-6"
          />
        </div>
      </div>
    </section>
  );
}
