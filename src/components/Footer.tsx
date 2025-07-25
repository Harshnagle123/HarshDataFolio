import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="hsl(var(--primary) / 0.1)"
          />
        </svg>
      </div>

      <div className="container mx-auto  relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Harsh Nagle</h3>
            <p className="text-muted-foreground leading-relaxed">
              Data Scientist passionate about transforming complex data into actionable insights 
              through innovative AI and machine learning solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#certificates', label: 'Certificates' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Harshnagle123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-effect glow-on-hover"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-nagle-72b505251"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-effect glow-on-hover"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:harshnagle2004@gmail.com"
                className="p-3 rounded-lg glass-effect glow-on-hover"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>📧 harshnagle2004@gmail.com</p>
              <p>📱 +91 8817024903</p>
              <p>📍 Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Harsh Nagle. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect hover:bg-primary/10 transition-colors"
          >
            <ArrowUp size={16} />
            <span className="text-sm">Back to Top</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
        <div className="absolute -bottom-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;