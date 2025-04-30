
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LogoUsageSection from '../components/LogoUsageSection';
import LogoMeaningSection from '../components/LogoMeaningSection';
import LogoEvolutionSection from '../components/LogoEvolutionSection';
import LogoVariationsSection from '../components/LogoVariationsSection';
import ColorPaletteSection from '../components/ColorPaletteSection';
import TypographySection from '../components/TypographySection';
import BrandVoiceSection from '../components/BrandVoiceSection';
import DownloadsSection from '../components/DownloadsSection';
import { ExternalLink } from 'lucide-react';

export default function BrandGuidelines() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <LogoUsageSection />
        <LogoMeaningSection />
        <LogoEvolutionSection />
        <LogoVariationsSection />
        <ColorPaletteSection />
        <TypographySection />
        <BrandVoiceSection />
        <DownloadsSection />
        
        <footer className="bg-precedential-black text-precedential-white py-6 px-4 border-t border-precedential-gold/20">
          <div className="container mx-auto text-center">
            <p className="text-sm text-precedential-white/70 mb-2">
              © 2025 Precedential Law. All rights reserved.
            </p>
            <a 
              href="https://www.precedentiallaw.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-precedential-gold hover:text-precedential-gold/80 transition-colors"
            >
              www.precedentiallaw.com <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
