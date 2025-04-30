
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="bg-portfolio-navy">
      <div className="section-container text-center max-w-2xl mx-auto">
        <p className="text-portfolio-teal mb-2">05. What's Next?</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        
        <p className="mb-8 text-portfolio-slate">
          I'm currently looking for new opportunities. Whether you have a question, job offer, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-portfolio-light-navy/30 p-6 rounded-lg">
            <h3 className="text-xl text-portfolio-white mb-2">Email Me At</h3>
            <p className="text-portfolio-teal">contact@johndoe.dev</p>
          </div>
          
          <div className="bg-portfolio-light-navy/30 p-6 rounded-lg">
            <h3 className="text-xl text-portfolio-white mb-2">Call Me At</h3>
            <p className="text-portfolio-teal">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <form className="bg-portfolio-light-navy/30 p-6 rounded-lg mb-10">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-portfolio-navy border border-portfolio-slate/30 text-portfolio-light-slate focus:outline-none focus:border-portfolio-teal transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-portfolio-navy border border-portfolio-slate/30 text-portfolio-light-slate focus:outline-none focus:border-portfolio-teal transition-colors"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md bg-portfolio-navy border border-portfolio-slate/30 text-portfolio-light-slate focus:outline-none focus:border-portfolio-teal transition-colors"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded-md bg-portfolio-navy border border-portfolio-slate/30 text-portfolio-light-slate focus:outline-none focus:border-portfolio-teal transition-colors resize-none"
            ></textarea>
          </div>
          <Button 
            size="lg" 
            className="w-full bg-portfolio-teal text-portfolio-navy hover:bg-portfolio-teal/90"
          >
            Send Message
          </Button>
        </form>
        
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-portfolio-light-slate hover:text-portfolio-teal transition-transform hover:translate-y-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="text-portfolio-light-slate hover:text-portfolio-teal transition-transform hover:translate-y-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="text-portfolio-light-slate hover:text-portfolio-teal transition-transform hover:translate-y-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
