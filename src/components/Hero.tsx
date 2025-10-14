import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Replace this greeting with your actual name */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600">Your Name</span>
            </h1>
            
            {/* Replace this with your professional title/role */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate Full Stack Developer creating amazing digital experiences 
              with modern technologies and AI-powered solutions.
            </p>
            
            {/* Replace this with a brief description of what you do */}
            <p className="text-lg text-gray-600 mb-8">
              I specialize in building responsive web applications, crafting user-centered 
              designs, and integrating intelligent features that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowRight size={20} />
              </a>
              
              {/* Replace the href with your actual resume/CV link */}
              <a href="#" className="btn-secondary inline-flex items-center gap-2">
                Download Resume
                <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Replace this placeholder with your professional photo */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-6xl text-primary-600">📸</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">Your Photo Here</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;