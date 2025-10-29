import React from 'react';
import CtaButton from './CtaButton';

interface HeaderProps {
    onEnrollClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEnrollClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border-color">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-dark-text">
          Impact Communications
        </h1>
        <CtaButton onClick={onEnrollClick} className="!py-2 !px-4 text-sm">Enroll Now</CtaButton>
      </div>
    </header>
  );
};

export default Header;