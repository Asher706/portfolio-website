import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js'
    },
    {
      icon: <Zap size={24} />,
      title: 'Backend Development', 
      description: 'Node.js, Python, API Development, Databases'
    },
    {
      icon: <Palette size={24} />,
      title: 'Hobbies',
      description: 'Reading, Board/Videogames, TTRPGs, and Dog Training'
    },
    
  ];

  return (
    <section id="about" className="section-padding bg-silver-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-700 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Story
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am an IT major with an associates in IT from Raritan Valley Community College. I have been working with computers since my father first showed me how to make a rudimentary website for myself when I was young. If I'm not working on a project, then I'm definitely reading a sci-fi novel, playing boardgames, videogames, or I'm out with friends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What I Do
            </h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="kean-card flex gap-4 p-6"
                >
                  <div className="text-primary-500 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-700 mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-silver-700">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;