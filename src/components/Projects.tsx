import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'Employee Management System for Use with MYSQL and PHP',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      downloadUrl: '/documents/Employee Management Asher L.zip',
      image: '/images/Employee-Management.jpg',
      featured: true
    },
    
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-700 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-silver-700 max-w-3xl mx-auto">
            Here are some of my many projects, more will be added as I continue with my career.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="max-w-2xl w-full">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="kean-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-6xl text-primary-600">📁</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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

                <div className="flex justify-center">
                  <a
                    href={project.downloadUrl}
                    className="btn-primary inline-flex items-center gap-2"
                    download="Employee-Management-System.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
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
            href="https://github.com/Asher706"
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