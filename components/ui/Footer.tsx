'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-dark py-12 border-t border-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link
              href="#home"
              className="font-logo text-gold text-2xl font-bold block text-center md:text-left uppercase tracking-wide"
            >
              Hair Salon
            </Link>
            <div className="text-gray-400 mt-4 text-center md:text-left max-w-md">
              <p className="text-lg text-balance">
                Precision cuts. Modern style. Your local grooming destination.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto space-x-6">
            <Link
              href="https://www.instagram.com"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="text-gold" size={24} />
            </Link>
            <Link
              href="https://www.facebook.com"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="text-gold" size={24} />
            </Link>
            <Link
              href="https://www.youtube.com"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Youtube"
            >
              <Youtube className="text-gold" size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Hair Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
