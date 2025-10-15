import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            {/* Replace "Your Name" with your actual name */}
            <h3 className="text-xl font-bold mb-4">Asher Levin 2025</h3>
            <p className="text-gray-300 leading-relaxed">
              Graduating Spring 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {/* GitHub - Replace with your GitHub profile URL */}
              <a 
                href="https://github.com/Asher706" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              
              {/* LinkedIn - Replace with your LinkedIn profile URL */}
              <a 
                href="https://www.linkedin.com/in/asher-levin-149b6925b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              
              {/* Email - Replace with your actual email */}
              <a 
                href="mailto:levinasher37@gmail.com" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Replace with your location or timezone */}
            <p className="text-gray-400 text-sm mt-4">
               Based in Hunterdon County, New Jersey
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Asher Levin 2025. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;