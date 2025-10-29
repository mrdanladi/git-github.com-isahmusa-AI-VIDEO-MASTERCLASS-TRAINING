
import React, { useState, useEffect } from 'react';
import CtaButton from './CtaButton';

interface HeroProps {
  onEnrollClick: () => void;
}

const heroImages = [
  'https://picsum.photos/seed/techconf/1920/1080',
  'https://picsum.photos/seed/videocreator/1920/1080',
  'https://picsum.photos/seed/teamwork/1920/1080',
  'https://picsum.photos/seed/digitalart/1920/1080',
  'https://picsum.photos/seed/podcaster/1920/1080',
];

const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative text-center py-20 md:py-32 bg-gray-900 overflow-hidden">
      {/* Image Slider */}
      {heroImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Hero background image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up">
            Generating Unlimited AI Videos for <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-gold-accent">Free</span> (Without Paying a Dime)
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Join the AI Video Creation Masterclass and learn step-by-step how to produce viral, high-quality AI videos absolutely free!
          </p>
          <div className="animate-fade-in-up [animation-delay:0.4s]">
            <CtaButton onClick={onEnrollClick} size="lg">
              Join the Masterclass Now 🚀
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
