import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
export default function LogoUsageSection() {
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://www.precedentiallaw.com', '_blank');
  };
  return <section id="logo-usage" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">Our Emblem of Protection</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-6 reveal-on-scroll"></div>
        
        <p className="text-lg mb-10 max-w-3xl reveal-on-scroll">
          Our logo reflects strength, precision, and clarity. The central structure resembles a legal pillar, 
          while the wings express movement and protection. Use the full logo in gold on white, black, or navy backgrounds.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 flex items-center justify-center reveal-on-scroll mockup-shadow bg-white rounded-none py-0 px-0">
            <img alt="Precedential Horizontal Logo" className="max-w-full max-h-40 object-contain" src="/lovable-uploads/c92c90d5-1fd6-4786-84d0-ecda425b31c3.png" />
          </div>
          <div className="p-8 flex items-center justify-center reveal-on-scroll mockup-shadow bg-white py-0 px-0 rounded-none">
            <img alt="Precedential Vertical Logo" className="max-w-full max-h-40 object-contain" src="/lovable-uploads/0112dbb7-2086-44c4-a88c-3f74cc934a19.png" />
          </div>
        </div>
        
        <div className="mb-10 p-8 flex items-center justify-center reveal-on-scroll mockup-shadow rounded-none px-0 py-0 bg-white">
          <img alt="Precedential Icon Only" src="/lovable-uploads/3a329c22-0eee-4938-a8d5-352e53183498.png" className="max-w-full max-h-32 object-contain" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 reveal-on-scroll">
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10" onClick={handleDownloadClick}>
            <ArrowDown className="h-4 w-4" /> Download Full Logo – PNG
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10" onClick={handleDownloadClick}>
            <ArrowDown className="h-4 w-4" /> Download Icon Only – SVG
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-precedential-white border-precedential-gold text-precedential-black hover:bg-precedential-gold/10" onClick={handleDownloadClick}>
            <ArrowDown className="h-4 w-4" /> Download Black & White Version – PNG
          </Button>
        </div>
        
        <div className="mt-16 reveal-on-scroll mockup-shadow">
          <img alt="Precedential Logo Mockup" className="w-full h-auto rounded-md" src="/lovable-uploads/1f4622cf-0284-4c34-a5ff-c6c838f68a0e.png" />
        </div>
      </div>
    </section>;
}