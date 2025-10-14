import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

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
      title: 'UI/UX Design',
      description: 'Figma, Adobe Creative Suite, Responsive Design'
    },
    {
      icon: <Users size={24} />,
      title: 'AI Integration',
      description: 'OpenAI API, Machine Learning, Automation'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Replace this with your personal story/background */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate developer with [X years] of experience creating digital solutions 
              that make a difference. My journey started with [your background/how you got started], 
              and I've been fascinated by the intersection of technology and user experience ever since.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me [your hobbies/interests]. I believe that 
              diverse experiences outside of technology make me a more creative and empathetic developer.
            </p>
            
            {/* Replace these with your actual achievements/certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">[Certification/Achievement 1]</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">[Certification/Achievement 2]</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">[Certification/Achievement 3]</span>
              </div>
            </div>
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
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-600 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600">
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