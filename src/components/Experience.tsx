
import React from 'react';
import { Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const Experience = () => {
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description: "Led development of cloud-native applications using React, TypeScript, and AWS. Improved system performance by 40% through architecture optimization."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Agency",
      duration: "2018 - 2021",
      description: "Developed responsive web applications for enterprise clients. Implemented CI/CD pipelines and reduced deployment time by 60%."
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Ventures",
      duration: "2017 - 2018",
      description: "Assisted in developing user interfaces using React and contributed to mobile-friendly redesigns of client websites."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      duration: "2016 - 2018",
      description: "Specialized in Software Engineering and Machine Learning. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      duration: "2012 - 2016",
      description: "Focused on web development and database systems. Completed thesis on responsive web design patterns."
    }
  ];
  
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      year: "2021"
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2020"
    }
  ];

  return (
    <section id="experience" className="bg-portfolio-navy">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal mr-2">02.</span> Experience & Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="text-portfolio-teal mr-2" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-portfolio-light-navy/30 p-6 rounded-lg hover:bg-portfolio-light-navy/50 transition-colors border-l-4 border-portfolio-teal">
                  <h4 className="font-bold text-xl text-portfolio-white">{job.title}</h4>
                  <div className="flex justify-between text-portfolio-teal my-1">
                    <span>{job.company}</span>
                    <span>{job.duration}</span>
                  </div>
                  <p className="text-portfolio-slate mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education & Certifications Column */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="text-portfolio-teal mr-2" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-portfolio-light-navy/30 p-6 rounded-lg hover:bg-portfolio-light-navy/50 transition-colors border-l-4 border-portfolio-teal">
                    <h4 className="font-bold text-xl text-portfolio-white">{edu.degree}</h4>
                    <div className="flex justify-between text-portfolio-teal my-1">
                      <span>{edu.institution}</span>
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-portfolio-slate mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="text-portfolio-teal mr-2" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              <Accordion type="single" collapsible className="bg-portfolio-light-navy/30 rounded-lg overflow-hidden">
                {certifications.map((cert, index) => (
                  <AccordionItem key={index} value={`cert-${index}`} className="border-b border-portfolio-teal/50 last:border-0">
                    <AccordionTrigger className="px-6 py-4 text-portfolio-white hover:text-portfolio-teal">
                      {cert.name}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-portfolio-slate">
                      <div className="flex justify-between">
                        <span>Issuer: {cert.issuer}</span>
                        <span>Year: {cert.year}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
