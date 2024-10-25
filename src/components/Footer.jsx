const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto text-center">
          
          {/* Social Media Links */}
          <div className="mb-4">
            <a
              href="https://linkedin.com/in/narendra-gunda-7680a11a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:bg-blue-700 p-2 rounded"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/narendra883"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:bg-gray-700 p-2 rounded"
            >
              GitHub
            </a>
            <a
              href="mailto:gundanarendra16@gmail.com"
              className="mx-2 text-white hover:bg-red-600 p-2 rounded"
            >
              Gmail
            </a>
          </div>
  
          {/* Footer Text */}
          <div className="text-gray-400 text-sm">
            &copy; 2024 Narendra. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  