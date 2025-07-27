'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Menu, X, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate 30 images using the available images (cycling through them)
  const galleryImages = Array.from({ length: 30 }, (_, index) => {
    const imageNumber = (index % 5) + 1; // Cycle through 1.jpg to 5.jpg
    return {
      id: index + 1,
      src: `/${imageNumber}.jpg`,
      alt: `Gallery Image ${index + 1}`
    };
  });

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
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
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-[#84a12f] transition-colors duration-300">
                  Home
                </Link>
                <Link href="/#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-[#84a12f] transition-colors duration-300">
                  Über uns
                </Link>
                <Link href="/#services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-[#84a12f] transition-colors duration-300">
                  Leistungen
                </Link>
                <Link href="/gallery" className="px-3 py-2 rounded-md text-sm font-medium text-[#84a12f] border-b-2 border-[#84a12f] transition-colors duration-300">
                  Galerie
                </Link>
                <Link href="/#contact" className="ml-2 inline-flex items-center px-4 py-2 border border-[#0a3d1a] rounded-full text-sm font-medium text-[#0a3d1a] hover:bg-[#0a3d1a] hover:text-white transition-colors duration-200">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-900 hover:text-[#84a12f] transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#84a12f] hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#84a12f] hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              href="/#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#84a12f] hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link 
              href="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#84a12f] hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#84a12f] hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-12 md:pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Link 
                href="/"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300 mr-2 sm:mr-4"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Zurück zur Startseite</span>
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Unsere Projekte
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Entdecken Sie eine umfassende Auswahl unserer erfolgreich abgeschlossenen Abbruch-, Entkerrungs- und Sanierungsprojekte.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer aspect-square"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-2">
                      <ZoomIn className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Modal Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
            <button
              onClick={zoomOut}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={zoomIn}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={closeModal}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>
          </div>

          {/* Image Container */}
          <div className="relative max-w-full max-h-full overflow-auto">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-none transition-transform duration-300 cursor-move"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center'
              }}
              draggable={false}
            />
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12" style={{ backgroundColor: '#84a12f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Link href="/">
                <Image 
                  src="/logo1.jpeg" 
                  alt="Oli Abbruch Logo" 
                  width={120} 
                  height={40} 
                  className="h-8 sm:h-10 md:h-12 object-contain"
                />
              </Link>
            </div>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white font-bold">Profis Am Werk</p>
            <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
              <a 
                href="tel:+4915901425683" 
                className="bg-white p-2 sm:p-3 rounded-full transition-colors duration-300 hover:opacity-80"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: '#84a12f' }} />
              </a>
              <a 
                href="mailto:oliabbruch@gmail.com" 
                className="bg-white p-2 sm:p-3 rounded-full transition-colors duration-300 hover:opacity-80"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: '#84a12f' }} />
              </a>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-white border-opacity-30">
              <p className="text-white opacity-80 text-sm sm:text-base">
                © 2024 Oli Abbruch. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}