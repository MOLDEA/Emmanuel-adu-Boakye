
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Customer Service': ['Help Center', 'Contact Us', 'How to Buy', 'Returns & Refunds'],
    'About Ezzmax': ['About Us', 'Careers', 'Terms & Conditions', 'Privacy Policy'],
    'Make Money': ['Sell on Ezzmax', 'Become a Sales Consultant', 'Become a Logistics Partner'],
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Ezzmax</h3>
            <p className="text-gray-400">Your trusted partner in African e-commerce.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-primary">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ezzmax Enterprise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
