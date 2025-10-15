import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Asher Levin 2025</h3>
            <p className="text-silver-300 leading-relaxed">
              Graduating Spring 2026
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-silver-200">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-silver-400 hover:text-primary-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-silver-400 hover:text-primary-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-silver-400 hover:text-primary-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

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