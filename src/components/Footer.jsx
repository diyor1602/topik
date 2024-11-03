import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p>&copy; {year} TOPIK Master. Barcha huquqlar ximoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;
