import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Machine Learning', percentage: 85, category: 'AI/ML' },
    { name: 'Data Science', percentage: 75, category: 'Analytics' },
    { name: 'Python', percentage: 80, category: 'Programming' },
    { name: 'SQL', percentage: 70, category: 'Database' },
    { name: 'Tableau', percentage: 75, category: 'Visualization' },
    { name: 'Power BI', percentage: 70, category: 'Visualization' },
    { name: 'Pandas', percentage: 85, category: 'Libraries' },
    { name: 'TensorFlow', percentage: 65, category: 'Libraries' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20" ref={sectionRef}>
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I have strong expertise in data science, machine learning, and programming. 
            Here's a breakdown of my technical proficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Expertise in Data Science & Analytics
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I continuously seek experiences to develop high-quality projects that contribute 
              to my learning and enhance my understanding of data science and analytics. My 
              passion drives me to explore cutting-edge technologies and methodologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Advanced Statistical Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Predictive Modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Data Visualization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Business Intelligence</span>
              </div>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="skill-progress h-3">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Python', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'Git', 'Excel', 'R'].map((tech) => (
              <div
                key={tech}
                className="p-4 text-center rounded-lg glass-effect glow-on-hover"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;