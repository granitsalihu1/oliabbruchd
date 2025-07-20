'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Building, Wrench, Hammer, ShieldCheck, Drill, Menu, X, Search } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Abbruch",
      description: "Professioneller Abbruch von Gebäuden und Bauwerken aller Art mit modernster Technik und höchsten Sicherheitsstandards."
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Entkernung",
      description: "Fachgerechte Entkernung von Immobilien zur Vorbereitung von Sanierungen und Umbauten."
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Demontage",
      description: "Sorgfältige Demontage von Bauteilen und technischen Anlagen mit Fokus auf Materialrecycling."
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Rückbau",
      description: "Kontrollierten Rückbau komplexer Baustrukturen unter Berücksichtigung aller Umweltauflagen."
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Schadstoffsanierung",
      description: "Sichere Entfernung und fachgerechte Entsorgung von Schadstoffen wie Asbest, PAK und anderen Gefahrstoffen."
    },
    {
      icon: <Drill className="w-12 h-12" />,
      title: "Betonbohren",
      description: "Präzise Bohrarbeiten in Beton und Mauerwerk für verschiedene bauliche Anforderungen."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="w-full px-3 sm:px-4 lg:px-6">
          
          {/* Mobile Layout: Centered Logo + Search + Menu */}
          <div className="md:hidden">
            {/* Top Row: HUGE Logo Centered */}
            <div className={`flex justify-center transition-all duration-300 ${
              scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
            }`}>
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
            </div>
            
            {/* Bottom Row: Search Bar and Menu Dots */}
            <div className={`flex items-center justify-center gap-3 pb-3 sm:pb-4 transition-all duration-300 ${
              scrolled ? 'pb-2 sm:pb-3' : ''
            }`}>
              {/* Search Bar */}
              <div className="flex-1 max-w-xs sm:max-w-sm">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="block w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base shadow-sm"
                  />
                </div>
              </div>
              
              {/* Menu Dots */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
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

          {/* Desktop Layout: Logo Left + Navigation Right */}
          <div className="hidden md:flex items-center justify-between py-4 lg:py-6">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
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
            </div>
            
            {/* Navigation Menu on the right */}
            <div className="flex items-center space-x-8 lg:space-x-12">
              <a 
                href="#home" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Abbruch
              </a>
              <a 
                href="#services" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Erdbau
              </a>
              <a 
                href="#about" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Tiefbau
              </a>
              <a 
                href="#contact" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Weitere Dienstleistungen
              </a>
              <a 
                href="#gallery" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Galerie
              </a>
              <a 
                href="#about" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Über uns
              </a>
              <a 
                href="#contact" 
                className="text-gray-900 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
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
                  <a 
                    href="#home" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Abbruch
                  </a>
                  <a 
                    href="#services" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Erdbau
                  </a>
                  <a 
                    href="#about" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tiefbau
                  </a>
                  <a 
                    href="#contact" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Weitere Dienstleistungen
                  </a>
                  <a 
                    href="#gallery" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galerie
                  </a>
                  <a 
                    href="#about" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Über uns
                  </a>
                  <a 
                    href="#contact" 
                    className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kontakt
                  </a>
                </div>
              </nav>
              
              {/* Contact Info */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200 bg-gray-50">
                <div className="space-y-3">
                  <a 
                    href="tel:+4915901425683" 
                    className="flex items-center text-sm text-gray-600"
                    style={{ color: 'var(--e-global-color-accent)' }}
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    +49 1590 1425683
                  </a>
                  <a 
                    href="mailto:oliabbruch@gmail.com" 
                    className="flex items-center text-sm text-gray-600"
                    style={{ color: 'var(--e-global-color-accent)' }}
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    oliabbruch@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Adjusted spacing for different layouts */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-40 md:pt-24 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            OLI ABBRUCH
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-orange-400 font-semibold">
            Profis Am Werk
          </p>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Ihr zuverlässiger Partner für professionelle Abbruch-, Entkerrungs- und Sanierungsarbeiten in Baden-Württemberg
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a 
              href="#contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Kostenlose Beratung
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten umfassende Dienstleistungen im Bereich Abbruch, Sanierung und Schadstoffbehandlung mit modernster Technik und jahrelanger Erfahrung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-orange-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Über Oli Abbruch
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Mit jahrelanger Erfahrung im Bereich Abbruch und Sanierung stehen wir für Qualität, Zuverlässigkeit und professionelle Ausführung. Unser erfahrenes Team führt Projekte jeder Größenordnung durch - von kleinen Entkernungsarbeiten bis hin zu kompletten Gebäudeabbrüchen.
                </p>
                <p>
                  Wir legen besonderen Wert auf Umweltschutz und die fachgerechte Entsorgung von Baumaterialien. Unsere Expertise in der Schadstoffsanierung gewährleistet sichere und gesetzeskonforme Arbeitsabläufe.
                </p>
                <p>
                  Vertrauen Sie auf unsere Kompetenz und lassen Sie sich von unserer Arbeitsqualität überzeugen. Wir freuen uns darauf, auch Ihr Projekt erfolgreich umzusetzen.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 inline-block"
                >
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere Projekte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Abbruch- und Sanierungsprojekte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 1"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Gebäudeabbruch</h3>
                  <p className="text-sm">Kompletter Rückbau eines Wohngebäudes</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 2"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Entkernung</h3>
                  <p className="text-sm">Fachgerechte Entkernung für Sanierung</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 3"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Schadstoffsanierung</h3>
                  <p className="text-sm">Sichere Asbestentfernung</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 4"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Betonbohren</h3>
                  <p className="text-sm">Präzise Bohrarbeiten in Beton</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 5"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Demontage</h3>
                  <p className="text-sm">Sorgfältige Demontage von Anlagen</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abbruchprojekt 6"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Rückbau</h3>
                  <p className="text-sm">Kontrollierter Rückbau komplexer Strukturen</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: 'var(--e-global-color-accent)' }}
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Mit langjähriger Erfahrung, Kompetenz und methodischem Know-how gehen wir Ihr Projekt an. Kontaktieren Sie uns und vereinbaren Sie einen Termin. Wir freuen uns, mit Ihnen über Ihr Projekt zu sprechen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Telefon</h3>
              <a 
                href="tel:+4915901425683" 
                className="text-xl text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                +49 1590 1425683
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-Mail</h3>
              <a 
                href="mailto:oliabbruch@gmail.com" 
                className="text-xl text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                oliabbruch@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Adresse</h3>
              <div className="text-xl text-gray-300">
                <p className="font-semibold text-white mb-2">Ariol Demiri</p>
                <p>Marktplatz 10</p>
                <p>73650 Winterbach</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Servicegebiet</h3>
              <p className="text-gray-300 text-lg">
                Wir sind in ganz Baden-Württemberg und den angrenzenden Regionen für Sie tätig. 
                Gerne erstellen wir Ihnen ein individuelles Angebot für Ihr Projekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src="/logo1.jpeg" 
                alt="Oli Abbruch Logo" 
                width={150} 
                height={50} 
                className="h-12 object-contain"
              />
            </div>
            <p className="text-orange-400 text-lg mb-6">Profis Am Werk</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <a 
                href="tel:+4915901425683" 
                className="transition-colors duration-300"
                style={{ color: 'var(--e-global-color-accent)' }}
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:oliabbruch@gmail.com" 
                className="transition-colors duration-300"
                style={{ color: 'var(--e-global-color-accent)' }}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500">
                © 2024 Oli Abbruch. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}