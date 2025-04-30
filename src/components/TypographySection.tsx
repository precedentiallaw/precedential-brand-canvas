
import React from 'react';

export default function TypographySection() {
  return (
    <section id="typography" className="py-20 px-4 bg-precedential-black text-precedential-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-precedential-gold reveal-on-scroll">Our Voice in Type</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="reveal-on-scroll">
            <div className="bg-precedential-black border border-precedential-gold/30 p-6 rounded-md">
              <h3 className="text-xl font-bold text-precedential-gold mb-4">Headings: Playfair Display</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Header 1</h4>
                  <p className="font-playfair text-4xl">Professional Protection</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Header 2</h4>
                  <p className="font-playfair text-3xl">Clear Guidance</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Header 3</h4>
                  <p className="font-playfair text-2xl">Legal Excellence</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Header 4</h4>
                  <p className="font-playfair text-xl">Strategic Counsel</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-on-scroll" style={{animationDelay: "0.2s"}}>
            <div className="bg-precedential-black border border-precedential-gold/30 p-6 rounded-md">
              <h3 className="text-xl font-bold text-precedential-gold mb-4">Body: Inter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Regular</h4>
                  <p className="font-inter">Our approach to legal representation combines precision with protection.</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Medium</h4>
                  <p className="font-inter font-medium">Every case deserves attention to detail and strategic thinking.</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Bold</h4>
                  <p className="font-inter font-bold">When you need more than a lawyer, you need Precedential.</p>
                </div>
                <div>
                  <h4 className="text-sm text-precedential-white/60 mb-1">Note</h4>
                  <p className="text-sm text-precedential-white/70 italic">Headings should command presence. Body text should stay legible and modern.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img 
            src="/lovable-uploads/f0c8836e-9e2d-44e9-92ba-2f6281d093ea.png" 
            alt="Precedential Typography Mockup" 
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
