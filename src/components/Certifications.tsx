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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="45" width="45" className="mx-auto">
          <path fill="#ffd43b" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
        </svg>
      ),
      color: "text-blue-400",
      link: "https://drive.google.com/file/d/1mGwAGUDcAMDtqqaZzKc2RA3DVn-Tgw7E/view?usp=sharing"
    },
    {
      title: "JavaScript Development",
      issuer: "PrepInsta",
      description: "Complete JavaScript course focusing on modern ES6+ features and web development",
      skills: ["ES6+ JavaScript", "DOM Manipulation", "Async Programming", "Modern JS Features"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" viewBox="0 0 448 512" className="mx-auto">
          <path fill="#fd9572" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>
      ),
      color: "text-yellow-400",
      link: "https://drive.google.com/file/d/1vPWR4YBnebGBCVdmiRA7Is_JxjCQi7aS/view?usp=sharing"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "LearnTube",
      description: "In-depth study of DSA concepts essential for software development and problem solving",
      skills: ["Algorithm Design", "Data Structures", "Problem Solving", "Complexity Analysis"],
      icon: "🧮",
      color: "text-green-400",
      link: "https://drive.google.com/file/d/1yqsCgwOfOFymTiQcs4105YUa5FoI5zAV/view?usp=sharing"
    },
    {
      title: "Python Basics",
      issuer: "Analytics Vidhya",
      description: "Foundation course in Python programming with focus on data analysis applications",
      skills: ["Python Syntax", "Data Analysis", "Libraries", "Programming Logic"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="45" width="45" className="mx-auto">
          <path fill="#74C0FC" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
        </svg>
      ),
      color: "text-purple-400",
      link: "https://drive.google.com/file/d/1nGWXRLYypmC95IZ0fXPaW8Yzk7K8_PSr/view?usp=sharing"
    },
    {
      title: "JP Morgan Software Engineering Simulation",
      issuer: "J.P. Morgan",
      description: "Virtual internship program focusing on financial software development and engineering practices",
      skills: ["Financial Software", "Dashboard Development", "Performance Optimization", "Enterprise Development"],
      icon: "🏦",
      color: "text-cyan-400",
      link: "https://drive.google.com/file/d/1co6mdkqn09Rv3I2ivZ0bgVIUCJG8t9f7/view?usp=sharing"
    },
    {
      title: "Agile Methodology Job Simulation",
      issuer: "Cognizant (Forage)",
      description: "Virtual internship program focused on Agile methodology and real-world job simulation tasks.",
      skills: ["Agile Methodology", "Team Collaboration", "Project Management", "Sprint Planning"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="45" width="45" className="mx-auto">
          <path fill="#6366f1" d="M246.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 109.3 352 384c0 35.3 28.7 64 64 64l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-70.7 0-128-57.3-128-128c0-35.3-28.7-64-64-64l-114.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 224 256c23.3 0 45.2 6.2 64 17.1l0-163.9-41.4 41.4z"/>
        </svg>
      ),
      color: "text-indigo-400",
      link: "https://drive.google.com/file/d/1HONdDr1HPm0xnS-9ma4zyA5zDZ8O0pZ_/view?usp=sharing"
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
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      size="sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </a>
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