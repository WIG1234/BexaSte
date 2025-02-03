// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer
      className="text-white rounded-tr-xl rounded-tl-2xl flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: 'url(/footer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <p className="text-white">&copy; 2024 Bexa. All rights reserved.</p>
      <p className="text-gray-400 text-sm mt-1">Made with ❤️ by Bexa Team</p>
      <div className="flex space-x-4 mt-2">
        <a href="https://www.facebook.com" className="text-white hover:text-blue-600">Facebook</a>
        <a href="https://www.twitter.com" className="text-white hover:text-blue-600">Twitter</a>
        <a href="https://www.linkedin.com" className="text-white hover:text-blue-600">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
