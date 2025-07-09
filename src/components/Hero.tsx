import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Bhupal</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-12">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-primary border-r-2 border-primary animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Entry-level Software Developer with a strong foundation in full-stack web development.
            Passionate about building scalable systems, writing clean code, and delivering exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="gradient-bg hover:glow-hover text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 glow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/bhupalreddysama262318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/bhupalreddysama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:bhupalreddysama18@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;