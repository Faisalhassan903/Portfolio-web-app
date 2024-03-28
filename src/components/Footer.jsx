// Import Font Awesome components

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full flex justify-center items-center flex-col">
      <div className="social-icons flex justify-center space-x-4 mb-4">
        <a href="https://twitter.com/yourhandle" className="hover:text-blue-400 transition-colors duration-300">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://facebook.com/yourprofile" className="hover:text-blue-600 transition-colors duration-300">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://instagram.com/yourhandle" className="hover:text-pink-600 transition-colors duration-300">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-500 transition-colors duration-300">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
