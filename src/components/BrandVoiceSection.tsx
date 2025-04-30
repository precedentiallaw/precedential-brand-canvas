
import React from 'react';

export default function BrandVoiceSection() {
  const tonePillars = [
    {
      title: "Confident, not arrogant",
      description: "We speak with authority built on expertise, not superiority."
    },
    {
      title: "Professional, not stiff",
      description: "We maintain standards while remaining accessible and human."
    },
    {
      title: "Clear, not over-complicated",
      description: "We communicate complex ideas with precision and transparency."
    }
  ];

  const phrases = [
    {
      text: "You're Protected."
    },
    {
      text: "Request Precedential Protection."
    },
    {
      text: "When You Need More Than a Lawyer…"
    }
  ];

  return (
    <section id="voice" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">How We Speak</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-bold mb-6">Tone Pillars</h3>
            <div className="space-y-6">
              {tonePillars.map((pillar, index) => (
                <div key={index} className="border-l-4 border-precedential-gold pl-4">
                  <h4 className="font-bold mb-1">{pillar.title}</h4>
                  <p className="text-precedential-black/80">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-on-scroll" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-bold mb-6">Phrases We Use</h3>
            <div className="space-y-6">
              {phrases.map((phrase, index) => (
                <div key={index} className="bg-precedential-black text-precedential-white p-4 rounded-md shadow-md">
                  <p className="font-playfair text-xl text-precedential-gold">"{phrase.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
