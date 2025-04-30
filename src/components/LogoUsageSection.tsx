
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from 'lucide-react';
import ImageModal from './ImageModal';

export default function LogoUsageSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
          <div 
            className="p-8 flex items-center justify-center reveal-on-scroll bg-white rounded-none py-0 px-0 cursor-pointer"
            onClick={() => openModal("/lovable-uploads/5f9cd191-09d5-42d4-aef7-336d4ff2a778.png")}
          >
            <img alt="Precedential Horizontal Logo" src="/lovable-uploads/5f9cd191-09d5-42d4-aef7-336d4ff2a778.png" className="max-w-full max-h-40 object-contain" />
          </div>
          <div 
            className="p-8 flex items-center justify-center reveal-on-scroll bg-white py-0 px-0 rounded-none cursor-pointer"
            onClick={() => openModal("/lovable-uploads/294465a8-963e-4d57-b49c-7a8f429a0815.png")}
          >
            <img alt="Precedential Vertical Logo" src="/lovable-uploads/294465a8-963e-4d57-b49c-7a8f429a0815.png" className="max-w-full max-h-40 object-contain" />
          </div>
        </div>
        
        <div 
          className="mb-10 p-8 flex items-center justify-center reveal-on-scroll rounded-none px-0 py-0 bg-white cursor-pointer"
          onClick={() => openModal("/lovable-uploads/a0450bb4-be17-4941-bb83-0da265d0c596.png")}
        >
          <img alt="Precedential Icon Only" src="/lovable-uploads/a0450bb4-be17-4941-bb83-0da265d0c596.png" className="max-w-full max-h-32 object-contain" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 reveal-on-scroll">
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

        <div className="reveal-on-scroll text-center mb-10">
          <a 
            href="https://www.precedentiallaw.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-precedential-black font-medium hover:text-precedential-gold transition-colors"
          >
            Visit our website <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        <div 
          className="mt-16 reveal-on-scroll cursor-pointer"
          onClick={() => openModal("/lovable-uploads/08f750fb-2002-4337-89dd-62cf60a346dc.png")}
        >
          <img src="/lovable-uploads/08f750fb-2002-4337-89dd-62cf60a346dc.png" alt="Precedential Logo Mockup" className="w-full h-auto rounded-md" />
        </div>
      </div>

      <ImageModal 
        isOpen={modalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </section>;
}
