
import React from 'react';
import ImageModal from './ImageModal';

export default function LogoEvolutionSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const evolutionSteps = [{
    id: 1,
    title: "Where It All Began",
    description: "A strong visual icon, built on symbolism—where it all began.",
    image: "/lovable-uploads/faa67d17-eaf2-4690-a0a4-eeec3b4d8e6d.png"
  }, {
    id: 2,
    title: "Refined Purpose",
    description: "An evolution in form and message—refined, yet rooted in our purpose.",
    image: "/lovable-uploads/5798e3bc-e8f6-4154-ace2-bcad20204417.png"
  }, {
    id: 3,
    title: "Modern Shield",
    description: "Stripped back to its essence—a modern shield that speaks for itself.",
    image: "/lovable-uploads/a0450bb4-be17-4941-bb83-0da265d0c596.png"
  }];
  
  return <section id="logo-evolution" className="py-20 px-4 bg-precedential-white text-precedential-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-on-scroll">Designed to Set the Standard</h2>
        
        <div className="w-20 h-1 bg-precedential-gold mb-10 reveal-on-scroll"></div>
        
        <div className="mb-16">
          {evolutionSteps.map((step, index) => <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} reveal-on-scroll`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div 
                  className="p-6 rounded-md cursor-pointer bg-white hover:shadow-lg transition-shadow"
                  onClick={() => openModal(step.image)}
                >
                  <img src={step.image} alt={`Precedential Logo Evolution - ${step.title}`} className="max-h-64 mx-auto" />
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
            </div>)}
        </div>
        
        <div className="flex justify-center my-10 reveal-on-scroll">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-precedential-gold to-transparent w-full max-w-md"></div>
        </div>
        
        <div 
          className="mt-16 reveal-on-scroll cursor-pointer"
          onClick={() => openModal("/lovable-uploads/7b6299ae-a241-4a60-a31f-220ccd901a88.png")}
        >
          <img src="/lovable-uploads/7b6299ae-a241-4a60-a31f-220ccd901a88.png" alt="Precedential Logo Mockup 3" className="w-full h-auto rounded-md" />
        </div>
      </div>
      
      <ImageModal 
        isOpen={modalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </section>;
}
