'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Search, Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Kompletter Gebäudeabbruch",
      description: "Professioneller Abbruch eines mehrstöckigen Wohngebäudes mit modernster Technik",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Abbruch"
    },
    {
      id: 2,
      title: "Entkernung Bürogebäude",
      description: "Fachgerechte Entkernung eines Bürogebäudes für anschließende Sanierung",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entkernung"
    },
    {
      id: 3,
      title: "Schadstoffsanierung",
      description: "Sichere Entfernung von Asbest und anderen Schadstoffen",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sanierung"
    },
    {
      id: 4,
      title: "Betonbohrarbeiten",
      description: "Präzise Bohrungen für Installationen und strukturelle Änderungen",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Betonbohren"
    },
    {
      id: 5,
      title: "Industriedemontage",
      description: "Demontage von Industrieanlagen und Maschinen",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Demontage"
    },
    {
      id: 6,
      title: "Selektiver Rückbau",
      description: "Kontrollierter Rückbau mit Fokus auf Materialrecycling",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Rückbau"
    },
    {
      id: 7,
      title: "Wohnhaus Entkernung",
      description: "Vollständige Entkernung eines Einfamilienhauses",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entkernung"
    },
    {
      id: 8,
      title: "Brückenabbruch",
      description: "Kontrollierter Abbruch einer Straßenbrücke",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Abbruch"
    },
    {
      id: 9,
      title: "Tankstellenrückbau",
      description: "Umweltgerechter Rückbau einer Tankstelle mit Bodensanierung",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sanierung"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Updated to match the image style */}
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
                  <ArrowRight className="ml-1 w-4 h-4" />
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
              Jedes Projekt zeigt unsere Expertise und unser Engagement für Qualität und Sicherheit.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span 
                      className="px-2 py-1 sm:px-3 text-xs sm:text-sm font-semibold text-white rounded-full"
                      style={{ backgroundColor: '#84a12f' }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-6">{item.description}</p>
                    <button 
                      className="bg-white text-green-600 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                    >
                      Details anzeigen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Link 
              href="/#contact" 
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-green-600 text-white font-bold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-700"
            >
              Ihr Projekt anfragen
            </Link>
          </div>
        </div>
      </section>

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