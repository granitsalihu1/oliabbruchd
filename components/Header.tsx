"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/logo1.jpeg" 
                alt="Oli Abbruch Logo" 
                width={scrolled ? 120 : 150} 
                height={scrolled ? 40 : 50} 
                className={`transition-all duration-300 object-contain ${
                  scrolled ? 'h-10' : 'h-12'
                }`}
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === 'home' ? 'text-[#84a12f]' : scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}>
                Abbruch
              </Link>
              <Link href="/#services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}>
                Erdbau
              </Link>
              <Link href="/#about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}>
                Tiefbau
              </Link>
              <Link href="/#services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}>
                Weitere Dienstleistungen
              </Link>
              <Link href="/gallery" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === 'gallery' ? 'text-[#84a12f]' : scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}>
                Galerie
              </Link>
              <Link href="/#contact" className={`ml-2 inline-flex items-center px-4 py-2 border border-[#0a3d1a] rounded-full text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#0a3d1a] hover:bg-[#0a3d1a] hover:text-white' : 'text-black border-black hover:bg-black hover:text-white'
              }`}>
                Kontakt
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-900 hover:text-[#84a12f]' : 'text-black hover:text-[#84a12f]'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menü</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-6">
              <div className="space-y-2 sm:space-y-4">
                <Link 
                  href="/" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Abbruch
                </Link>
                <Link 
                  href="/#services" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Erdbau
                </Link>
                <Link 
                  href="/#about" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tiefbau
                </Link>
                <Link 
                  href="/#services" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Weitere Dienstleistungen
                </Link>
                <Link 
                  href="/gallery" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galerie
                </Link>
                <Link 
                  href="/#contact" 
                  className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </nav>
            
            {/* Contact Info */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200 bg-gray-50">
              <div className="space-y-3">
                <a 
                  href="tel:+4915901425683" 
                  className="flex items-center text-sm text-gray-600 hover:text-orange-600"
                >
                  <span className="w-4 h-4 mr-3">📞</span>
                  +49 1590 1425683
                </a>
                <a 
                  href="mailto:oliabbruch@gmail.com" 
                  className="flex items-center text-sm text-gray-600 hover:text-orange-600"
                >
                  <span className="w-4 h-4 mr-3">✉️</span>
                  oliabbruch@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}