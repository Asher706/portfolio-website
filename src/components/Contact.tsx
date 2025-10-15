import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    const email = 'levinasher37@gmail.com';
    
    // Show an alert with options if mailto doesn't work
    const userConfirm = window.confirm(
      `Click OK to open your email client, or Cancel to copy the email address (${email}) to your clipboard.`
    );
    
    if (userConfirm) {
      // Try to open email client
      const mailtoLink = `mailto:${email}?subject=Portfolio Contact&body=Hello Asher,%0D%0A%0D%0AI found your portfolio and would like to get in touch.%0D%0A%0D%0ABest regards`;
      window.location.href = mailtoLink;
    } else {
      // Copy email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address "${email}" copied to clipboard!`);
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(`Email address "${email}" copied to clipboard!`);
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Centered Contact Information */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <button 
                  onClick={handleEmailClick}
                  className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                  title="Click to email me - Opens email client or copies address"
                >
                  <Mail className="text-primary-600" size={24} />
                </button>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:levinasher37@gmail.com"
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors"
                  >
                    levinasher37@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
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