import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: 'Data Analytics and Visualization',
      issuer: 'Accenture',
      description: 'Comprehensive training in data analytics, visualization techniques, and business intelligence tools.',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Great Learning',
      description: 'Advanced Python programming for data analysis, machine learning, and statistical modeling.',
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Coursera',
      description: 'Database management, advanced queries, and data manipulation for analytical purposes.',
    },
    {
      title: 'Python Pandas',
      issuer: 'Great Learning',
      description: 'Data manipulation and analysis using Pandas library for efficient data processing.',
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Online Academy',
      description: 'Core concepts of machine learning algorithms, model training, and evaluation techniques.',
    },
    {
      title: 'Learn Python Through Practice',
      issuer: 'TutorialsPoint',
      description: 'Hands-on Python programming with practical projects and real-world applications.',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying ahead in the rapidly evolving field of data science. 
            Here are my recent certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="project-card rounded-xl p-6 space-y-4 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Award size={24} className="text-primary" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="flex-grow space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {cert.title}
                </h3>
                
                <div className="text-sm font-medium text-primary">
                  {cert.issuer}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Badge */}
              <div className="pt-4 border-t border-border/50">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  <Award size={12} />
                  Certified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-3xl font-bold text-gradient mb-2">6+</div>
            <div className="text-muted-foreground">Certificates Earned</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-3xl font-bold text-gradient mb-2">500+</div>
            <div className="text-muted-foreground">Hours of Learning</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-3xl font-bold text-gradient mb-2">4+</div>
            <div className="text-muted-foreground">Skill Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;