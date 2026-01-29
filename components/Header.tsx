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
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.jpeg"
                alt="Oli Abbruch Logo" 
                width={scrolled ? 120 : 150} 
                height={scrolled ? 40 : 50} 
                className={`transition-all duration-300 object-contain rounded-lg shadow-md border-2 border-[#c2030b] bg-white ${
                  scrolled ? 'h-10' : 'h-14'
                }`}
                priority
              />
              <span className="hidden sm:inline text-xl font-bold tracking-tight text-[#c2030b] drop-shadow-sm" style={{letterSpacing: '0.04em'}}>OLI ABBRUCH</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === 'home' ? 'text-[#c2030b]' : scrolled ? 'text-gray-900 hover:text-[#c2030b]' : 'text-black hover:text-[#c2030b]'
              }`}>
                Abbruch
              </Link>
         
         
              <Link href="/#services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-900 hover:text-[#c2030b]' : 'text-black hover:text-[#c2030b]'
              }`}>
                Weitere Dienstleistungen
              </Link>
              <Link href="/gallery" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === 'gallery' ? 'text-[#c2030b]' : scrolled ? 'text-gray-900 hover:text-[#c2030b]' : 'text-black hover:text-[#c2030b]'
              }`}>
                Galerie
              </Link>
              <Link
                href="/#contact"
                className="ml-2 inline-flex items-center px-4 py-2 border border-[#c2030b] rounded-full text-sm font-medium text-[#c2030b] transition-colors duration-200 hover:bg-[#c2030b] hover:text-white"
              >
                Kontakt
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 border-2 border-[#c2030b] bg-white shadow-md ${
                scrolled ? 'text-[#c2030b] hover:bg-[#c2030b] hover:text-white' : 'text-[#c2030b] hover:bg-[#c2030b] hover:text-white'
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
              <div className="flex items-center gap-2">
                <Image 
                  src="/logo.jpeg"
                  alt="Oli Abbruch Logo" 
                  width={60}
                  height={20}
                  className="object-contain rounded shadow border-2 border-[#c2030b] bg-white"
                  priority
                />
                <span className="text-lg font-bold tracking-tight text-[#c2030b]" style={{letterSpacing: '0.04em'}}>OLI ABBRUCH</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-[#c2030b] hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Navigation Links */}
            <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-6">
              <div className="space-y-2 sm:space-y-4">
                <Link 
                  href="/" 
                  className="block py-3 px-4 text-base font-medium text-[#1b0808] hover:text-[#c2030b] hover:bg-[#fde3dd] rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Abbruch
                </Link>
                <Link 
                  href="/#services" 
                  className="block py-3 px-4 text-base font-medium text-[#1b0808] hover:text-[#c2030b] hover:bg-[#fde3dd] rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Weitere Dienstleistungen
                </Link>
                <Link 
                  href="/gallery" 
                  className="block py-3 px-4 text-base font-medium text-[#1b0808] hover:text-[#c2030b] hover:bg-[#fde3dd] rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galerie
                </Link>
                <Link 
                  href="/#contact" 
                  className="block py-3 px-4 text-base font-medium text-[#1b0808] hover:text-[#c2030b] hover:bg-[#fde3dd] rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </nav>
            {/* Contact Info & Address */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-[#2c0606] bg-[#120101]">
              <div className="space-y-3 text-white text-sm">
                <div className="font-semibold">Beethovenstr 19<br />73642 Welzheim</div>
                <div className="">Wir sind OLI ABBRUCH aus Welzheim.<br />Wir bieten Abbruch, Entkernung, Betonbohren, Altbausanierung und Schadstoffentkernung.<br />Schnell, sauber und zuverlässig.</div>
                <a 
                  href="tel:+4915901425683" 
                  className="flex items-center font-bold hover:text-[#c2030b]"
                >
                  <span className="w-4 h-4 mr-3">📞</span>
                  Rufen Sie uns an: 015901425683
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
