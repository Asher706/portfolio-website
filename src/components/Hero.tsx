import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 kean-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-950 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-500">Asher Levin</span>
            </h1>
            
            <p className="text-xl text-silver-700 mb-8 leading-relaxed">
              A 22 year old college student and soon to be IT technician
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              I specialize in building responsive web applications and software that is sleek, functional, and accessible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowRight size={20} />
              </a>
              
              <a 
                href="/documents/ResumeFinal.pdf" 
                className="btn-secondary inline-flex items-center gap-2"
                download="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                <img 
                  src="/images/image.png" 
                  alt="Your Name - Professional Photo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center flex-col">
                  <div className="text-6xl text-primary-600 mb-4">📸</div>
                  <span className="text-primary-600 font-medium text-center px-4">
                    Photo not found:<br/>
                    <code className="text-sm">/public/images/image.png</code>
                  </span>
                </div>
              </div>
              
              
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