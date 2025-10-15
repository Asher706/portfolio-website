import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="section-padding kean-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-silver-300 mx-auto mb-8"></div>
          <p className="text-xl text-silver-100 max-w-3xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm border-2 border-silver-200 rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-silver-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">Email</h4>
                  <p className="text-gray-700 text-lg">levinasher37@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-silver-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">Phone</h4>
                  <a 
                    href="tel:+19086386954"
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors"
                  >
                    (908) 638-6954
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-lg">Hunterdon County, New Jersey</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-4 text-center">Connect With Me</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-primary-600" size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-primary-600" size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="text-primary-600" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;