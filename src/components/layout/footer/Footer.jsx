import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Coca-Cola. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
