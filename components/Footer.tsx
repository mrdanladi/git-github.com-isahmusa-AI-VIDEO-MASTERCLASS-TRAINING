import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-gray text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Impact Communications. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;