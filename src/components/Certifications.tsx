import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Python Programming",
      issuer: "SimpliLearn",
      description: "Comprehensive Python programming course covering fundamentals, OOP, and advanced concepts",
      skills: ["Python Fundamentals", "Object-Oriented Programming", "Data Structures", "File Handling"],
      icon: "🐍",
      color: "text-blue-400"
    },
    {
      title: "JavaScript Development",
      issuer: "PrepInsta",
      description: "Complete JavaScript course focusing on modern ES6+ features and web development",
      skills: ["ES6+ JavaScript", "DOM Manipulation", "Async Programming", "Modern JS Features"],
      icon: "🟨",
      color: "text-yellow-400"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "LearnTube",
      description: "In-depth study of DSA concepts essential for software development and problem solving",
      skills: ["Algorithm Design", "Data Structures", "Problem Solving", "Complexity Analysis"],
      icon: "🧮",
      color: "text-green-400"
    },
    {
      title: "Python Basics",
      issuer: "Analytics Vidhya",
      description: "Foundation course in Python programming with focus on data analysis applications",
      skills: ["Python Syntax", "Data Analysis", "Libraries", "Programming Logic"],
      icon: "📊",
      color: "text-purple-400"
    },
    {
      title: "JP Morgan Software Engineering Simulation",
      issuer: "J.P. Morgan",
      description: "Virtual internship program focusing on financial software development and engineering practices",
      skills: ["Financial Software", "Dashboard Development", "Performance Optimization", "Enterprise Development"],
      icon: "🏦",
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span> & Learning
          </h2>
          <p className="text-lg text-muted-foreground">Continuous learning and skill development journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="reveal bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-hover group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gradient group-hover:text-primary transition-colors duration-300 mb-2">
                  {cert.title}
                </CardTitle>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-3">Skills Gained:</h4>
                  <div className="space-y-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    size="sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <p className="text-muted-foreground">Certifications Earned</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <p className="text-muted-foreground">Hours of Learning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">10+</div>
              <p className="text-muted-foreground">Skills Acquired</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center reveal">
          <div className="bg-muted/50 rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in lifelong learning and staying updated with the latest technologies. 
              Currently exploring cloud technologies and advanced backend frameworks to expand my skill set.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AWS", "Kubernetes", "GraphQL", "FastAPI", "TypeScript"].map((tech, index) => (
                <span 
                  key={tech}
                  className="bg-primary/20 text-primary px-3 py-2 rounded-full text-sm font-medium border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;