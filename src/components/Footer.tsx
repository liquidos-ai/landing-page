import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <span className="text-lg font-bold text-white font-space">
                LiquidOS
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-lg leading-relaxed text-sm">
              Building the foundational infrastructure for the agentic future.
              Empowering robotics, healthcare, edge AI, and beyond with seamless
              hybrid intelligence that works everywhere.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 font-space text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <span className="text-gray-400 text-sm">
              Built in Rust for the agentic future
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
