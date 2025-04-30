
import React from 'react';

export default function LogoEvolutionSection() {
  const evolutionSteps = [
    {
      id: 1,
      title: "Where It All Began",
      description: "A strong visual icon, built on symbolism—where it all began.",
      image: "/lovable-uploads/b3cae2ba-745d-49df-8042-afba59220321.png"
    },
    {
      id: 2,
      title: "Refined Purpose",
      description: "An evolution in form and message—refined, yet rooted in our purpose.",
      image: "/lovable-uploads/9b4c48c2-bd78-4767-a116-6e4303c12682.png"
    },
    {
      id: 3,
      title: "Modern Shield",
      description: "Stripped back to its essence—a modern shield that speaks for itself.",
      image: "/lovable-uploads/c50bf003-bf6a-4e4d-93cb-112f7b3c4657.png"
    }
  ];

  return (
    <section id="logo-evolution" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">Designed to Set the Standard</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="mb-16">
          {evolutionSteps.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} reveal-on-scroll`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-precedential-black p-6 rounded-md mockup-shadow">
                  <img 
                    src={step.image} 
                    alt={`Precedential Logo Evolution - ${step.title}`}
                    className="max-h-64 mx-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-precedential-gold text-precedential-black flex items-center justify-center font-bold mr-3">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-precedential-black/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center my-10 reveal-on-scroll">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-precedential-gold to-transparent w-full max-w-md"></div>
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img 
            src="/lovable-uploads/cbda42c8-3154-48b1-b56c-c9b3e657ca5c.png" 
            alt="Precedential Logo Mockup 3" 
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
