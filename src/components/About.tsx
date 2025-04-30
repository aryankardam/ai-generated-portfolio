
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Node.js', 'Next.js', 'GraphQL',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL'
  ];
  
  return (
    <section id="about" className="bg-portfolio-light-navy/30">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! My name is John, and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-portfolio-teal mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 bg-portfolio-navy border-2 border-portfolio-teal rounded-md overflow-hidden transition-all">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500" 
                alt="John Doe" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-portfolio-teal rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
