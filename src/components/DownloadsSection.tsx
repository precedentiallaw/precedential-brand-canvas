
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from 'lucide-react';
import ImageModal from './ImageModal';

export default function DownloadsSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const downloads = [{
    title: "Logo Pack",
    icon: "📁",
    description: "All logo variations in PNG, SVG, and EPS formats"
  }, {
    title: "Typography Guide",
    icon: "🔤",
    description: "Font specifications and usage guidelines"
  }, {
    title: "Color Palette",
    icon: "🎨",
    description: "Color swatches with RGB, CMYK, and HEX values"
  }, {
    title: "Brand Book PDF",
    icon: "📘",
    description: "Complete brand guidelines in one document"
  }];
  
  return <section id="downloads" className="py-20 px-4 bg-precedential-black text-precedential-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-precedential-gold reveal-on-scroll">Your Brand Toolkit</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {downloads.map((download, index) => <div key={index} className="bg-precedential-black border border-precedential-gold/30 p-6 rounded-md flex flex-col items-center text-center reveal-on-scroll" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-4xl mb-4">{download.icon}</div>
              <h3 className="text-lg font-bold text-precedential-gold mb-2">{download.title}</h3>
              <p className="text-sm text-precedential-white/70 mb-6">{download.description}</p>
              <Button variant="outline" className="w-full mt-auto flex items-center gap-2 bg-transparent border-precedential-gold text-precedential-gold hover:bg-precedential-gold/10">
                <ArrowDown className="h-4 w-4" /> Download
              </Button>
            </div>)}
        </div>
        
        <div className="bg-precedential-gold/10 border border-precedential-gold/30 p-8 rounded-lg text-center max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-precedential-gold">Need to Use Our Brand?</h2>
          <p className="mb-6 text-precedential-white/90">Let's make sure your usage reflects the Precedential Standard.</p>
          <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-gold/90">
            Request Brand Use Approval
          </Button>
        </div>
        
        <div className="mt-10 mb-8 reveal-on-scroll text-center">
          <a 
            href="https://www.precedentiallaw.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-precedential-gold hover:text-precedential-gold/80 transition-colors"
          >
            www.precedentiallaw.com <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        <div 
          className="mt-16 reveal-on-scroll cursor-pointer"
          onClick={() => openModal("/lovable-uploads/d03ac815-992b-49e3-8ec9-8483156f4b96.png")}
        >
          <img alt="Precedential Final Mockup" className="w-full h-auto rounded-md" src="/lovable-uploads/d03ac815-992b-49e3-8ec9-8483156f4b96.png" />
        </div>
      </div>

      <ImageModal 
        isOpen={modalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </section>;
}
