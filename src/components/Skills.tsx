
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Express", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Git", level: 95 }
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "UX/UI Design", level: 70 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 80 },
        { name: "Performance Optimization", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-portfolio-light-navy/30">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal mr-2">04.</span> Skills
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-portfolio-light-navy border-none overflow-hidden hover:shadow-lg hover:shadow-portfolio-teal/20 transition-all">
              <div className="bg-portfolio-teal text-portfolio-navy font-semibold py-3 px-4">
                {category.name}
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-portfolio-light-slate">{skill.name}</span>
                        <span className="text-portfolio-teal">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-portfolio-navy/50 rounded-full h-2">
                        <div 
                          className="bg-portfolio-teal h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
