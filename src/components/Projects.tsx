import { ExternalLink, Github } from 'lucide-react';
import voiceAssistantImg from '@/assets/voice-assistant.jpg';
import dataAnalysisImg from '@/assets/data-analysis.jpg';
import bikePredictionImg from '@/assets/bike-prediction.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
  featured?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Voice Assistant Project',
      description: 'Built an intelligent voice assistant using Python and OpenAI API for interactive tasks. Features include natural language processing, speech recognition, and automated task execution.',
      image: voiceAssistantImg,
      githubUrl: 'https://github.com/Harshnagle123/Voice-Assistant',
      technologies: ['Python', 'OpenAI API', 'Speech Recognition', 'NLP'],
      featured: true,
    },
    {
      title: 'Comprehensive Data Analysis',
      description: 'Worked on extensive data analysis tasks including classification and regression models. Implemented various machine learning algorithms for predictive analytics and pattern recognition.',
      image: dataAnalysisImg,
      githubUrl: 'https://github.com/Harshnagle123/Data-Analysis',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    },
    {
      title: 'Bike Rental Prediction',
      description: 'Developed a sophisticated machine learning model to predict bike rental demand using historical data, weather patterns, and seasonal trends for optimized resource allocation.',
      image: bikePredictionImg,
      githubUrl: 'https://github.com/Harshnagle123/Bike-Rental-Prediction-',
      technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Regression'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data science, 
            machine learning, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card rounded-2xl overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-effect hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to the data science community.
            </p>
            <a
              href="https://github.com/Harshnagle123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;