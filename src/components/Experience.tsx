import { useEffect, useRef } from 'react';
import { Building, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experience = {
    company: "J.P. Morgan",
    position: "Software Engineering Simulation Intern",
    duration: "Simulation Program",
    type: "Virtual Internship",
    achievements: [
      "Built real-time financial dashboards and user interfaces using modern web technologies",
      "Improved backend system throughput by implementing optimized data processing algorithms",
      "Reduced application latency through efficient code refactoring and performance optimization",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Gained hands-on experience with enterprise-level software development practices"
    ],
    skills: ["JavaScript", "Python", "Financial APIs", "Dashboard Development", "Performance Optimization"]
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">My journey in software development</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="reveal bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-hover group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gradient group-hover:text-primary transition-colors duration-300">
                      {experience.position}
                    </CardTitle>
                    <p className="text-xl font-semibold text-foreground mt-1">{experience.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start sm:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium">{experience.type}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-muted/80 text-foreground px-4 py-2 rounded-full text-sm border border-border/50 hover:border-primary/50 transition-colors duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                <p className="text-muted-foreground italic leading-relaxed">
                  "This simulation provided invaluable exposure to enterprise-level software development practices 
                  and helped me understand the complexities of building scalable financial applications. The experience 
                  reinforced my passion for backend development and performance optimization."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline visualization */}
          <div className="mt-12 reveal">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-primary to-accent"></div>
              <div className="flex justify-center">
                <div className="bg-background border-4 border-primary rounded-full p-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-gradient">Looking Forward</p>
                <p className="text-muted-foreground mt-2">
                  Eager to apply my skills in a full-time software development role
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;