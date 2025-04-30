
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div 
          className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-portfolio-teal mb-5 tracking-wider">Hi, my name is</p>
        </div>
        
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 ${
            isVisible ? 'animate-fade-in' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          John Doe.
        </h1>
        
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6 opacity-0 ${
            isVisible ? 'animate-fade-in' : ''
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          I build things for the web.
        </h2>
        
        <div 
          className={`max-w-xl mb-12 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-portfolio-slate text-lg">
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
        </div>
        
        <div 
          className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '1s' }}
        >
          <Button 
            size="lg" 
            className="bg-transparent hover:bg-portfolio-teal/10 border-2 border-portfolio-teal text-portfolio-teal hover:text-portfolio-teal"
          >
            Check out my work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
