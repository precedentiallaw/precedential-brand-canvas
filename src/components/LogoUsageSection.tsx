import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
export default function LogoUsageSection() {
  return <section id="logo-usage" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">Our Emblem of Protection</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-6 reveal-on-scroll"></div>
        
        <p className="text-lg mb-10 max-w-3xl reveal-on-scroll">
          Our logo reflects strength, precision, and clarity. The central structure resembles a legal pillar, 
          while the wings express movement and protection. Use the full logo in gold on white, black, or navy backgrounds.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 flex items-center justify-center reveal-on-scroll mockup-shadow bg-white rounded-none">
            <img src="/lovable-uploads/9954224c-5a1a-40d0-abaf-b9fa4b664494.png" alt="Precedential Horizontal Logo" className="max-w-full max-h-40 object-fill" />
          </div>
          <div className="p-8 flex items-center justify-center reveal-on-scroll mockup-shadow bg-white py-0 px-0 rounded-none">
            <img src="/lovable-uploads/e44c0ea9-f5e0-4e9d-b977-a54e93e9cb71.png" alt="Precedential Vertical Logo" className="max-w-full max-h-40" />
          </div>
        </div>
        
        <div className="mb-10 bg-precedential-black p-8 rounded-md flex items-center justify-center reveal-on-scroll mockup-shadow">
          <img src="/lovable-uploads/c50bf003-bf6a-4e4d-93cb-112f7b3c4657.png" alt="Precedential Icon Only" className="max-w-full max-h-32" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 reveal-on-scroll">
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10">
            <ArrowDown className="h-4 w-4" /> Download Full Logo – PNG
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10">
            <ArrowDown className="h-4 w-4" /> Download Icon Only – SVG
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10">
            <ArrowDown className="h-4 w-4" /> Download Black & White Version – PNG
          </Button>
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img src="/lovable-uploads/c1763d84-16f1-43f1-93c9-27c470973367.png" alt="Precedential Logo Mockup" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </section>;
}