import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
              <img
                src={profilePhoto}
                alt="Harsh Nagle"
                className="relative z-10 w-full rounded-2xl shadow-2xl glow-on-hover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent blur-lg opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate data analyst with expertise in Python, Data Science, Machine Learning, 
              SQL, MS Excel, Tableau, Power BI, and advanced data visualization techniques. My journey 
              has been shaped by hands-on projects and real-world simulations where I've developed 
              sophisticated predictive models and analyzed complex datasets to drive strategic insights.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a commitment to continuous learning and innovation, I'm always exploring new 
              technologies and methodologies in the rapidly evolving field of data science. 
              I'm actively seeking opportunities to leverage my analytical skills in dynamic, 
              collaborative environments where I can make a meaningful impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-4 rounded-lg glass-effect">
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg glass-effect">
                <div className="text-2xl font-bold text-gradient">6+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
              <div className="text-center p-4 rounded-lg glass-effect col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="/HarshNagleResume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;