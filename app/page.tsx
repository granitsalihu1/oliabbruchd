'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Building, Wrench, Hammer, ShieldCheck, Drill, Menu, X } from 'lucide-react';
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
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
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}>
                  Home
                </a>
                <a href="#services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}>
                  Leistungen
                </a>
                <a href="#about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}>
                  Über uns
                </a>
                <a href="#contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}>
                  Kontakt
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}
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
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            OLI ABBRUCH
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-orange-400 font-semibold">
            Profis Am Werk
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Ihr zuverlässiger Partner für professionelle Abbruch-, Entkerrungs- und Sanierungsarbeiten in Baden-Württemberg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Kostenlose Beratung
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Haben Sie Fragen zu unseren Leistungen oder benötigen Sie ein unverbindliches Angebot? Kontaktieren Sie uns - wir beraten Sie gerne!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <p className="text-xl text-gray-300">
                Marktplatz 10<br />
                73650 Winterbach
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
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
                width={120} 
                height={40} 
                className="mr-4 h-10 object-contain"
              />
            </div>
            <p className="text-orange-400 text-lg mb-6">Profis Am Werk</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <a href="tel:+4915901425683" className="hover:text-orange-400 transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:oliabbruch@gmail.com" className="hover:text-orange-400 transition-colors duration-300">
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