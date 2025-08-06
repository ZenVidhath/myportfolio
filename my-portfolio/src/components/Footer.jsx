const Footer = () => {
  return (
    <footer className="p-4 md:p-6 text-center text-sm text-gray-400 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white transition-colors duration-200">GitHub</a>
          <a href="#" className="hover:text-white transition-colors duration-200">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;