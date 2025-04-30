
import React from 'react';
import ImageModal from './ImageModal';

export default function LogoVariationsSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const variations = [{
    name: "Horizontal Logo Gold/White",
    image: "/lovable-uploads/5f9cd191-09d5-42d4-aef7-336d4ff2a778.png",
    bgColor: "bg-precedential-black"
  }, {
    name: "Horizontal Logo Navy",
    image: "/lovable-uploads/294465a8-963e-4d57-b49c-7a8f429a0815.png",
    bgColor: "bg-precedential-black"
  }, {
    name: "Icon Only Gold",
    image: "/lovable-uploads/a0450bb4-be17-4941-bb83-0da265d0c596.png",
    bgColor: "bg-precedential-black"
  }, {
    name: "Icon Silver",
    image: "/lovable-uploads/c7d3a74a-bba6-4d12-9b4b-1df29fa8693e.png",
    bgColor: "bg-white"
  }, {
    name: "Icon White",
    image: "/lovable-uploads/16bd7d8c-dcc2-4ba5-a5c0-ebb8c79bb763.png",
    bgColor: "bg-precedential-black"
  }];
  
  const exclusions = [{
    rule: "Don't stretch",
    example: "Distorting proportions compromises brand integrity"
  }, {
    rule: "Don't rotate",
    example: "Keep logo in its original orientation"
  }, {
    rule: "Don't recolor",
    example: "Only use approved color variations"
  }, {
    rule: "Don't place on busy backgrounds",
    example: "Maintain clarity and visibility"
  }, {
    rule: "Don't use icon where full logo is needed",
    example: "Follow usage guidelines for appropriate contexts"
  }, {
    rule: "Don't add shadows or effects",
    example: "Keep the logo clean and authentic"
  }];
  
  return <section id="variations" className="py-20 px-4 bg-precedential-black text-precedential-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-precedential-gold reveal-on-scroll">Using It Right</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {variations.map((variant, index) => <div 
            key={index} 
            className={`${variant.bgColor} p-6 rounded-md flex flex-col items-center justify-center reveal-on-scroll cursor-pointer`} 
            style={{
              animationDelay: `${index * 0.1}s`
            }}
            onClick={() => openModal(variant.image)}
          >
              <div className="h-36 flex items-center justify-center">
                <img src={variant.image} alt={`Precedential ${variant.name}`} className="max-h-full max-w-full" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-precedential-gold">{variant.name}</p>
            </div>)}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-precedential-gold reveal-on-scroll">Do Not:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {exclusions.map((exclusion, index) => <div key={index} className="bg-precedential-white/5 border border-precedential-gold/20 p-6 rounded-md reveal-on-scroll" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <h4 className="text-lg font-bold text-precedential-gold mb-2">{exclusion.rule}</h4>
              <p className="text-precedential-white/70 text-sm">{exclusion.example}</p>
            </div>)}
        </div>
        
        <div 
          className="mt-16 reveal-on-scroll cursor-pointer"
          onClick={() => openModal("/lovable-uploads/716188a4-8240-40a3-a15f-565e8b6e2f83.png")}
        >
          <img alt="Precedential Logo Mockup 4" src="/lovable-uploads/716188a4-8240-40a3-a15f-565e8b6e2f83.png" className="w-full h-auto rounded-md bg-precedential-white p-6 object-cover" />
        </div>
      </div>
      
      <ImageModal 
        isOpen={modalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </section>;
}
