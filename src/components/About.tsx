import { useEffect, useRef } from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern technologies"
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with Python frameworks"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database Management",
      description: "Designing and optimizing databases for scalable applications"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">Get to know more about my journey and expertise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Passionate Developer from Hyderabad
            </h3>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm Bhupal Reddy Sama, a passionate entry-level software developer based in Hyderabad, India. 
                With a strong foundation in full-stack web development, I specialize in creating efficient, 
                scalable solutions using modern technologies.
              </p>
              
              <p className="text-muted-foreground">
                My journey in software development is driven by curiosity and a desire to build applications 
                that make a real difference. I'm particularly interested in backend development with Python 
                frameworks like Django and Flask, while also enjoying frontend challenges.
              </p>
              
              <p className="text-muted-foreground">
                I believe in continuous learning and staying updated with the latest industry trends. 
                My goal is to contribute to meaningful projects while growing as a developer in a 
                collaborative environment.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">Hyderabad, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-muted-foreground">bhupalreddysama18@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 6302327978</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Availability</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="reveal bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-hover group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;