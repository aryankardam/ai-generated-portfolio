
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy py-6 text-center text-portfolio-slate text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>Designed & Built by John Doe</p>
        <p className="mt-2">© {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
