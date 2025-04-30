
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Featured Project 1',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Node.js', 'Express', 'Spotify API'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&h=450',
      github: '#',
      external: '#',
      featured: true,
    },
    {
      title: 'Featured Project 2',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, npm, and more.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&h=450',
      github: '#',
      external: '#',
      featured: true,
    },
    {
      title: 'Featured Project 3',
      description: 'A single-page web app for helping people find safe outdoor activities during COVID-19. Features include location-based search, user reviews, and bookmarking.',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=450',
      github: '#',
      external: '#',
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: 'Time to Have More Fun',
      description: 'A single page web app for helping users find safe outdoor activities during COVID-19.',
      tech: ['Next.js', 'Chart.js', 'GitHub API'],
      github: '#',
      external: '#',
    },
    {
      title: 'Building a Headless Mobile App CMS',
      description: 'Find safe outdoor activities during COVID-19 based on location.',
      tech: ['React Native', 'GraphQL', 'AWS Amplify'],
      github: '#',
      external: '#',
    },
    {
      title: 'Integrating Algolia Search',
      description: 'Building a custom multisite compatible WordPress plugin for advanced search.',
      tech: ['PHP', 'WordPress', 'Algolia'],
      github: '#',
      external: '#',
    },
  ];

  return (
    <section id="projects" className="bg-portfolio-navy">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal mr-2">02.</span> Some Things I've Built
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative grid md:grid-cols-12 items-center gap-10 ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 md:relative ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <div className="relative h-full rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-portfolio-teal/20 hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div 
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                } z-20`}
              >
                <div className={`bg-portfolio-light-navy p-6 rounded-md ${
                  index % 2 === 1 ? 'items-end' : ''
                }`}>
                  <p className="text-portfolio-teal mb-1 text-sm">Featured Project</p>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-portfolio-light-navy rounded-md p-6 text-portfolio-slate mb-4">
                    <p>{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 text-sm text-portfolio-slate ${
                    index % 2 === 1 ? 'justify-end' : ''
                  }`}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${
                    index % 2 === 1 ? 'justify-end' : ''
                  }`}>
                    <a href={project.github} className="text-portfolio-light-slate hover:text-portfolio-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={project.external} className="text-portfolio-light-slate hover:text-portfolio-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-center mt-32 mb-12">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-light-navy hover:bg-portfolio-light-navy/80 border-none p-7 h-full transition-all hover:-translate-y-2"
            >
              <div className="flex justify-between items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-portfolio-teal" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="flex gap-4">
                  <a href={project.github} className="text-portfolio-light-slate hover:text-portfolio-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={project.external} className="text-portfolio-light-slate hover:text-portfolio-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <h4 className="text-portfolio-white text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-portfolio-slate mb-8">{project.description}</p>
              
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-portfolio-slate">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
