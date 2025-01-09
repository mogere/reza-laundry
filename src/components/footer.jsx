const Footer = () => {
    return (
      <footer className="bg-teal-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Logo and Description */}
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center items-center mb-4">
              <div className="text-4xl font-bold">Cleano</div>
              <span className="text-sm text-teal-300 ml-2">✦</span>
            </div>
            {/* Description */}
            <p className="text-gray-300 max-w-lg mx-auto">
              Laundry and dry-cleaning services offer convenient, professional
              care for clothing, ensuring garments are cleaned, pressed, and ready
              to wear.
            </p>
          </div>
  
          {/* Navigation Links */}
          <div className="mt-8 text-center border-t border-teal-800 pt-6">
            <ul className="flex justify-center space-x-8 text-sm md:text-base text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
  
          {/* Copyright and Policies */}
          <div className="mt-6 text-center border-t border-teal-800 pt-6">
            <p className="text-sm text-gray-400">
              © Copyright Cleano 2024
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  