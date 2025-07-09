import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const techStackRef = useRef(null);

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

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(
      techStackRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
    );
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "OOP", level: 88 }
      ],
      color: "text-blue-400"
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "React", level: 75 },
        { name: "Next.js", level: 70 }
      ],
      color: "text-green-400"
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ],
      color: "text-purple-400"
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 88 },
        { name: "MongoDB", level: 75 }
      ],
      color: "text-orange-400"
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 }
      ],
      color: "text-cyan-400"
    },
    {
      title: "Others",
      skills: [
        { name: "RESTful APIs", level: 85 },
        { name: "DSA", level: 80 },
        { name: "Docker Hub", level: 75 },
        { name: "Agile Methodology", level: 80 }
      ],
      color: "text-pink-400"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p ref={subtitleRef} className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="reveal bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-hover group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-6 ${category.color} group-hover:text-primary transition-colors duration-300`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <div ref={techStackRef} className="mt-16 reveal">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'JavaScript', 'Django', 'Flask', 'React', 'Next.js', 'HTML5', 'CSS3', 
              'Bootstrap', 'Tailwind', 'MySQL', 'MongoDB', 'Git', 'Docker', 'Linux'
            ].map((tech, index) => (
              <div 
                key={tech}
                className="bg-muted/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 hover:glow transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;