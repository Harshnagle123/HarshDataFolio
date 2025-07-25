import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, hsl(0 0% 98%), hsl(262 83% 70%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Harsh Nagle
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-medium">
            Artificial Intelligence & Data Science
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming data into insights through machine learning, statistical analysis, 
            and innovative AI solutions. Building the future with intelligent algorithms.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/Harshnagle123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect glow-on-hover"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harsh-nagle-72b505251" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect glow-on-hover"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:harshnagle2004@gmail.com"
              className="p-3 rounded-full glass-effect glow-on-hover"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </button>
            <a
              href="/HarshNagleResume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-lg glass-effect border border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation"
        >
          <ArrowDown size={32} className="text-primary" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;