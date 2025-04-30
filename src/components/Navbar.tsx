
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'logo-usage', label: 'Logo' },
    { id: 'logo-meaning', label: 'Meaning' },
    { id: 'logo-evolution', label: 'Evolution' },
    { id: 'variations', label: 'Variations' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'voice', label: 'Voice' },
    { id: 'downloads', label: 'Downloads' }
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });

    setShowBackToTop(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
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
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-precedential-black/90 text-precedential-white border-b border-precedential-gold/20">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-3 md:mb-0">
            <h2 className="font-playfair text-xl text-precedential-gold">Precedential</h2>
            <button className="md:hidden text-precedential-gold">
              {/* Mobile menu button would go here */}
            </button>
          </div>
          
          <div className="flex items-center space-x-1 overflow-x-auto md:overflow-visible w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap text-sm ${
                  activeSection === item.id 
                  ? "text-precedential-gold border-b border-precedential-gold" 
                  : "text-precedential-white hover:text-precedential-gold"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-precedential-gold text-precedential-black p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
