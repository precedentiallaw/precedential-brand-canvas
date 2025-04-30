
import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-precedential-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <img 
          src={imageUrl} 
          alt="Enlarged view" 
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()} 
        />
        <button 
          className="absolute top-4 right-4 bg-precedential-gold text-precedential-black w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-opacity-90 transition-all"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
