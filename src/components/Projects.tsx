import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // Replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      longDescription: 'More detailed description of the project, your role, challenges you faced, and solutions you implemented.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveUrl: '#', // Replace with actual live demo URL
      githubUrl: '#', // Replace with actual GitHub repository URL
      image: '🌐', // Replace with actual project image
      featured: true
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Another amazing project showcasing different skills and technologies.',
      longDescription: 'Detailed explanation of this project, including your approach and key learnings.',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🚀',
      featured: true
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'A third project demonstrating your range of abilities.',
      longDescription: 'What made this project special and what you learned from building it.',
      technologies: ['Next.js', 'MongoDB', 'OpenAI API', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🤖',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.title}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="btn-primary inline-flex items-center gap-2 flex-1 justify-center"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn-secondary inline-flex items-center gap-2 flex-1 justify-center"
                  >
                    Code
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Replace href with link to your full portfolio or GitHub */}
          <a
            href="#"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;