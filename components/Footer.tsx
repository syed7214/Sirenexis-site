
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sirenexis-cream py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-12 md:space-y-0">
          <div className="space-y-6">
            <div className="flex items-center">
              <h3 className="text-3xl font-bold tracking-tighter">Sirenexis</h3>
            </div>
            <p className="text-sirenexis-green/60 text-sm font-medium max-w-xs leading-relaxed">
              Customer Support Services | Scalable Outsourcing Support.
              London Strategy. Global Execution.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 text-sm">
            <div>
                <p className="font-bold mb-4 uppercase tracking-widest text-[10px]">Location</p>
                <p className="font-medium">Kingston Upon Thames, London</p>
            </div>
            <div>
                <p className="font-bold mb-4 uppercase tracking-widest text-[10px]">Contact</p>
                <p className="font-medium">+44 7552 242207</p>
                <p className="font-medium">info@sirenexis.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center md:items-start">
            <p>© 2024 Sirenexis. All Rights Reserved.</p>
            <Link to="/admin" className="hover:opacity-100 transition-opacity underline underline-offset-2">Staff Access</Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
