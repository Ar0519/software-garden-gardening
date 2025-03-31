
import { Link } from "react-router-dom";
import { Leaf, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-garden-green-dark text-white">
      <div className="garden-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-garden-sand" />
              <span className="text-xl font-serif font-bold text-garden-sand">The Software Garden</span>
            </Link>
            <p className="text-garden-sand opacity-90 text-sm">
              Demystifying software maintenance through gardening metaphors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-garden-sand">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/maintenance-types" className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity">
                  Maintenance Types
                </Link>
              </li>
              <li>
                <Link to="/garden-process" className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity">
                  Garden Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-garden-sand">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/garden-stories" className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity">
                  Garden Stories
                </Link>
              </li>
              <li>
                <Link to="/ask-the-gardener" className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity">
                  Ask The Gardener
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-garden-sand">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-garden-sand opacity-80 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-garden-green-light border-opacity-30">
          <p className="text-sm text-garden-sand opacity-70">
            © {new Date().getFullYear()} The Software Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
