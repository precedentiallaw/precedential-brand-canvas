
import React from 'react';

export default function LogoMeaningSection() {
  const meanings = [
    {
      title: "Pillar",
      description: "Structure and legal integrity",
      icon: "🏛️"
    },
    {
      title: "Wings",
      description: "Movement, protection, clarity",
      icon: "🕊️"
    },
    {
      title: "Gold Finish",
      description: "Prestige, value, excellence",
      icon: "✨"
    },
    {
      title: "Symmetry",
      description: "Balance, precision, professionalism",
      icon: "⚖️"
    }
  ];

  return (
    <section id="logo-meaning" className="py-20 px-4 bg-precedential-black text-precedential-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-precedential-gold reveal-on-scroll">More Than a Mark—A Message</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {meanings.map((item, index) => (
            <div key={index} className="bg-precedential-black border border-precedential-gold/30 p-6 rounded-md reveal-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-precedential-gold mb-2">{item.title}</h3>
              <p className="text-precedential-white/80">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img 
            src="/lovable-uploads/6d1491b9-a3a0-4f55-958d-4e61289970c3.png" 
            alt="Precedential Logo Mockup 2" 
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
