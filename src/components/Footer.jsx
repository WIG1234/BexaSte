// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className=" bg-gray-800 text-white ">
      <div className="flex flex-col items-center justify-center bg-[url('/footer.jpg')] bg-cover bg-center bg-opacity-80 h-full w-full p-4">
        <p className="text-blue-300">&copy; 2024 Bexa. All rights reserved.</p>
        <p className="text-gray-400 text-sm mt-1">Made with ❤️ by Bexa Team</p>
        <div className="flex  space-x-4 mt-2">
          <a href="https://www.facebook.com" className="text-blue-400 hover:text-blue-600">Facebook</a>
          <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
        </div>
        <div className="flex  space-x-4 mt-2">
          <a href="https://www.facebook.com" className="text-blue-400 hover:text-blue-600">Facebook</a>
          <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
