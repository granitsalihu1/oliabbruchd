'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Search, Menu, X } from 'lucide-react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="w-full px-3 sm:px-4 lg:px-6">
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className={`flex justify-center transition-all duration-300 ${
              scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
            }`}>
              <Link href="/">
                <Image 
                  src="/logo1.jpeg" 
                  alt="Oli Abbruch Logo" 
                  width={scrolled ? 300 : 400} 
                  height={scrolled ? 90 : 120} 
                  className={`transition-all duration-300 object-contain ${
                    scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'
                  }`}
                  priority
                />
              </Link>
            </div>
            
            <div className={`flex items-center justify-center gap-3 pb-3 sm:pb-4 transition-all duration-300 ${
              scrolled ? 'pb-2 sm:pb-3' : ''
            }`}>
              <div className="flex-1 max-w-xs sm:max-w-sm">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="block w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base shadow-sm"
                  />
                </div>
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col space-y-1">
                  <div className="w-5 sm:w-6 h-0.5 bg-current rounded-full"></div>
                  <div className="w-5 sm:w-6 h-0.5 bg-current rounded-full"></div>
                  <div className="w-5 sm:w-6 h-0.5 bg-current rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Layout - Horizontal navigation like in the image */}
          <div className="hidden md:flex items-center justify-between py-4 lg:py-6">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image 
                  src="/logo1.jpeg" 
                  alt="Oli Abbruch Logo" 
                  width={scrolled ? 180 : 220} 
                  height={scrolled ? 60 : 80} 
                  className={`transition-all duration-300 object-contain ${
                    scrolled ? 'h-12 lg:h-16' : 'h-16 lg:h-20'
                  }`}
                  priority
                />
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 lg:space-x-12">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-green-600 font-medium text-lg transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-900 hover:text-green-600 font-medium text-lg transition-colors duration-300"
              >
                Über uns
              </Link>
              <Link 
                href="/#services" 
                className="text-gray-900 hover:text-green-600 font-medium text-lg transition-colors duration-300"
              >
                Leistungen
              </Link>
              <Link 
                href="/gallery" 
                className="text-green-600 font-medium text-lg transition-colors duration-300 border-b-2 border-green-600"
              >
                Galerie
              </Link>
              <Link 
                href="/#contact" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-green-700"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menü</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-6">
                <div className="space-y-2 sm:space-y-4">
                  <Link 
                    href="/" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/#about" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Über uns
                  </Link>
                  <Link 
                    href="/#services" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Leistungen
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="block py-3 px-4 text-base font-medium text-green-600 bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galerie
                  </Link>
                  <Link 
                    href="/#contact" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-32 sm:pt-40 md:pt-28 lg:pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Link 
                href="/"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300 mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück zur Startseite
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie eine umfassende Auswahl unserer erfolgreich abgeschlossenen Abbruch-, Entkerrungs- und Sanierungsprojekte. 
              Jedes Projekt zeigt unsere Expertise und unser Engagement für Qualität und Sicherheit.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-sm font-semibold text-white rounded-full"
                      style={{ backgroundColor: '#84a12f' }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg mb-6">{item.description}</p>
                    <button 
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Details anzeigen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/#contact" 
              className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-700"
            >
              Ihr Projekt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#84a12f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Link href="/">
                <Image 
                  src="/logo1.jpeg" 
                  alt="Oli Abbruch Logo" 
                  width={150} 
                  height={50} 
                  className="h-12 object-contain"
                />
              </Link>
            </div>
            <p className="text-lg mb-6 text-white font-bold">Profis Am Werk</p>
            <div className="flex justify-center space-x-8">
              <a 
                href="tel:+4915901425683" 
                className="bg-white p-3 rounded-full transition-colors duration-300 hover:opacity-80"
              >
                <Phone className="w-6 h-6" style={{ color: '#84a12f' }} />
              </a>
              <a 
                href="mailto:oliabbruch@gmail.com" 
                className="bg-white p-3 rounded-full transition-colors duration-300 hover:opacity-80"
              >
                <Mail className="w-6 h-6" style={{ color: '#84a12f' }} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white border-opacity-30">
              <p className="text-white opacity-80">
                © 2024 Oli Abbruch. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}