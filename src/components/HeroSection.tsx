import React from 'react';
export default function HeroSection() {
  return <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-precedential-black text-precedential-white py-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <img alt="Precedential Logo" className="mx-auto w-40 md:w-56 animate-fade-in" src="/lovable-uploads/ca4c9373-7b68-4c2e-9bcc-caafa30039b8.png" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-precedential-gold animate-fade-in-delay-1">
          The Precedential Standard—Defined.
        </h1>
        
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in-delay-2">
          Explore the identity, values, and voice behind Precedential Law. 
          Designed for clarity, protection, and excellence.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-delay-3">
          <button className="px-6 py-3 bg-precedential-gold text-precedential-black font-medium rounded hover:bg-opacity-90 transition-all">
            Explore the Guidelines
          </button>
          <button className="px-6 py-3 border border-precedential-gold text-precedential-gold font-medium rounded hover:bg-precedential-gold/10 transition-all">
            Download Assets
          </button>
        </div>
      </div>
    </section>;
}