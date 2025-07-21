"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Wrench,
  Hammer,
  ShieldCheck,
  Drill,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Users,
  X,
  Menu,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  // State for mobile menu and scroll behaviour.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add an event listener to update state when the user scrolls.  This is
  // used to adjust the header's background opacity on scroll.
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

  // Services data used in the services section.  Each service has an
  // icon, title and description.  Icons are imported from lucide-react
  // above and rendered with a consistent size.
  const services = [
    {
      icon: <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Abbruch",
      description:
        "Professioneller Abbruch von Gebäuden und Bauwerken aller Art mit modernster Technik und höchsten Sicherheitsstandards.",
    },
    {
      icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Entkernung",
      description:
        "Fachgerechte Entkernung von Immobilien zur Vorbereitung von Sanierungen und Umbauten.",
    },
    {
      icon: <Hammer className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Demontage",
      description:
        "Sorgfältige Demontage von Bauteilen und technischen Anlagen mit Fokus auf Materialrecycling.",
    },
    {
      icon: <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Rückbau",
      description:
        "Kontrollierter Rückbau komplexer Baustrukturen unter Berücksichtigung aller Umweltauflagen.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Schadstoffsanierung",
      description:
        "Sichere Entfernung und fachgerechte Entsorgung von Schadstoffen wie Asbest, PAK und anderen Gefahrstoffen.",
    },
    {
      icon: <Drill className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Betonbohren",
      description:
        "Präzise Bohrarbeiten in Beton und Mauerwerk für verschiedene bauliche Anforderungen.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Mobile layout */}
          <div className="flex md:hidden items-center justify-between py-3 sm:py-4">
            <div>
              <Image
                src="/logo1.jpeg"
                alt="Oli Abbruch Logo"
                width={scrolled ? 180 : 200}
                height={scrolled ? 54 : 60}
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'
                }`}
                priority
              />
            </div>
            {/* Hamburger toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#84a12f] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between py-4 lg:py-6">
            <div>
              <Image
                src="/logo1.jpeg"
                alt="Oli Abbruch Logo"
                width={scrolled ? 180 : 220}
                height={scrolled ? 54 : 66}
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-10 md:h-12 lg:h-14' : 'h-12 md:h-14 lg:h-16'
                }`}
                priority
              />
            </div>
            {/* Navigation Menu on the right */}
            <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-[#84a12f] font-medium text-xs md:text-sm lg:text-base xl:text-lg transition-colors duration-300"
              >
                Abbruch
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-[#84a12f] font-medium text-xs md:text-sm lg:text-base xl:text-lg transition-colors duration-300"
              >
                Erdbau
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-[#84a12f] font-medium text-xs md:text-sm lg:text-base xl:text-lg transition-colors duration-300"
              >
                Tiefbau
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-[#84a12f] font-medium text-xs md:text-sm lg:text-base xl:text-lg transition-colors duration-300"
              >
                Weitere Dienstleistungen
              </a>
              <a
                href="#gallery"
                className="text-gray-900 hover:text-[#84a12f] font-medium text-xs md:text-sm lg:text-base xl:text-lg transition-colors duration-300"
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="ml-1 md:ml-2 inline-flex items-center px-2 md:px-3 lg:px-4 py-1.5 md:py-2 border border-[#0a3d1a] rounded-full text-[#0a3d1a] hover:bg-[#0a3d1a] hover:text-white transition-colors duration-200 text-xs md:text-sm lg:text-base"
              >
                Kontakt
                <ArrowRight className="ml-1 w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu content */}
            <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Top bar with logo and close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                  <Image
                    src="/logo1.jpeg"
                    alt="Oli Abbruch Logo"
                    width={120}
                    height={40}
                    className="object-contain h-8 w-auto"
                    priority
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Menü schließen"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Navigation links */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <div className="space-y-2">
                    <a
                      href="#home"
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#84a12f] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#services"
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#84a12f] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Leistungen
                    </a>
                    <a
                      href="#about"
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#84a12f] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Über uns
                    </a>
                    <a
                      href="#gallery"
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#84a12f] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Galerie
                    </a>
                    <a
                      href="#contact"
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-[#84a12f] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kontakt
                    </a>
                  </div>
                </nav>

                {/* Contact info in mobile menu */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="space-y-3">
                    <a 
                      href="tel:+4915901425683" 
                      className="flex items-center text-gray-700 hover:text-[#84a12f] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">+49 1590 1425683</span>
                    </a>
                    <a 
                      href="mailto:oliabbruch@gmail.com" 
                      className="flex items-center text-gray-700 hover:text-[#84a12f] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">oliabbruch@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32"
      >
        {/* Background image with a tinted overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[#0a3d1a] opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          {/* Small tagline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 md:mb-4 tracking-wider uppercase font-medium text-white/80">
            Oli Abbruch &amp; Sanierung
          </p>
          {/* Multi‑line headline where the last line uses the accent colour */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6">
            <span className="block text-white">Abbruch mit Präzision.</span>
            <span className="block text-white">Entkernung mit Charakter.</span>
            <span className="block" style={{ color: "#84a12f" }}>
              Sanierung mit Konzept.
            </span>
          </h1>
          {/* Description below the headline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed">
            Ihr zuverlässiger Partner für professionelle Abbruch-, Entkernungs- und Sanierungsarbeiten in Baden‑Württemberg.
          </p>
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#0a3d1a] text-white font-semibold rounded-full shadow hover:bg-[#084c1d] transition-colors duration-300 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Mehr erfahren
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0a3d1a] transition-colors duration-300 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Kontakt
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Unsere Leistungen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Wir bieten umfassende Dienstleistungen im Bereich Abbruch, Sanierung und Schadstoffbehandlung mit modernster Technik und jahrelanger Erfahrung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-3 sm:mb-4 md:mb-6" style={{ color: "#84a12f" }}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 xl:gap-16 items-center">
            {/* Left column: text and feature list */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Über Oli Abbruch
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Mit jahrelanger Erfahrung im Bereich Abbruch und Sanierung stehen wir für Qualität,
                Zuverlässigkeit und professionelle Ausführung. Unser erfahrenes Team führt Projekte jeder
                Größenordnung durch – von kleinen Entkernungsarbeiten bis hin zu kompletten Gebäudeabbrüchen.
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#84a12f]/10">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#84a12f" }} />
                  </span>
                  <div className="ml-2 sm:ml-3 md:ml-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      Qualität, die bleibt
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      Unsere Projekte entstehen mit Liebe zum Detail, hochwertigen Materialien und echtem
                      Handwerk – für Ergebnisse, die über Jahre überzeugen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#84a12f]/10">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#84a12f" }} />
                  </span>
                  <div className="ml-2 sm:ml-3 md:ml-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      Service auf Augenhöhe
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      Persönliche Beratung, klare Kommunikation und zuverlässige Umsetzung – bei uns steht der
                      Mensch im Mittelpunkt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 md:mt-8">
                <a
                  href="#contact"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-[#084c1d] text-sm sm:text-base"
                  style={{ backgroundColor: "#0a3d1a" }}
                >
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
            {/* Right column: image collage */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Baustelle"
                  className="rounded-xl w-full h-full object-cover shadow-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Abbruchdetail"
                  className="absolute top-1/2 right-0 w-3/4 sm:w-2/3 h-24 sm:h-32 md:h-40 lg:h-56 object-cover rounded-xl shadow-xl transform translate-x-1/4 -translate-y-1/2 border-2 sm:border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0a3d1a] text-white py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg shadow-xl">
                <p className="text-lg sm:text-xl md:text-2xl font-bold">15+</p>
                <p className="text-xs sm:text-sm">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Unsere Projekte
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Abbruch- und Sanierungsprojekte.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Gallery items with responsive hover effects */}
            {[
              { title: "Gebäudeabbruch", desc: "Kompletter Rückbau eines Wohngebäudes", img: "1216589" },
              { title: "Entkernung", desc: "Fachgerechte Entkernung für Sanierung", img: "2219024" },
              { title: "Schadstoffsanierung", desc: "Sichere Asbestentfernung", img: "1216589" },
              { title: "Betonbohren", desc: "Präzise Bohrarbeiten in Beton", img: "2219024" },
              { title: "Demontage", desc: "Sorgfältige Demontage von Anlagen", img: "1216589" },
              { title: "Rückbau", desc: "Kontrollierter Rückbau komplexer Strukturen", img: "2219024" }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={`https://images.pexels.com/photos/${item.img}/pexels-photo-${item.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <a
              href="#contact"
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-white font-bold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#084c1d]"
              style={{ backgroundColor: "#0a3d1a" }}
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white" style={{ backgroundColor: "#84a12f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">Kontakt</h2>
            <p className="text-base sm:text-lg md:text-xl text-white opacity-90 max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-4">
              Mit langjähriger Erfahrung, Kompetenz und methodischem Know-how gehen wir Ihr Projekt an. Kontaktieren Sie uns und vereinbaren Sie einen Termin. Wir freuen uns, mit Ihnen über Ihr Projekt zu sprechen.
            </p>
          </div>
          {/* Two‑column layout: contact information on the left, contact form on the right.  On smaller screens this stacks vertically. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="flex items-start">
                <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#84a12f" }} />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Telefon</h3>
                  <a href="tel:+4915901425683" className="text-sm sm:text-base md:text-lg text-white hover:underline">
                    +49 1590 1425683
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#84a12f" }} />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">E‑Mail</h3>
                  <a href="mailto:oliabbruch@gmail.com" className="text-sm sm:text-base md:text-lg text-white hover:underline break-all">
                    oliabbruch@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#84a12f" }} />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Adresse</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white">Ariol Demiri</p>
                  <p className="text-sm sm:text-base md:text-lg text-white">Marktplatz 10</p>
                  <p className="text-sm sm:text-base md:text-lg text-white">73650 Winterbach</p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <div className="bg-[#0a3d1a] text-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Kontaktformular</h3>
                <form className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Vorname"
                      className="w-full border border-[#84a12f] rounded-md p-2 sm:p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#84a12f] text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Nachname"
                      className="w-full border border-[#84a12f] rounded-md p-2 sm:p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#84a12f] text-sm sm:text-base"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E‑Mail"
                    className="w-full border border-[#84a12f] rounded-md p-2 sm:p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#84a12f] text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer"
                    className="w-full border border-[#84a12f] rounded-md p-2 sm:p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#84a12f] text-sm sm:text-base"
                  />
                  <textarea
                    name="message"
                    placeholder="Beschreibung"
                    rows={4}
                    className="w-full border border-[#84a12f] rounded-md p-2 sm:p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#84a12f] text-sm sm:text-base"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#0a3d1a] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-[#084c1d] transition-colors duration-300 text-sm sm:text-base"
                  >
                    Senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area section between contact and footer */}
      <section id="servicegebiet" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#84a12f]/10 mb-2 md:mb-0 flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" style={{ color: "#84a12f" }} />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Servicegebiet
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                Wir sind in ganz Baden‑Württemberg und den angrenzenden Regionen für Sie tätig. Gerne erstellen wir Ihnen ein individuelles Angebot für Ihr Projekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a3d1a] text-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Branding and tagline */}
            <div className="sm:col-span-2 md:col-span-1">
              <Image
                src="/logo1.jpeg"
                alt="Oli Abbruch Logo"
                width={140}
                height={42}
                className="h-8 sm:h-10 md:h-12 object-contain mb-2 sm:mb-3 md:mb-4"
              />
              <p className="text-xs sm:text-sm leading-relaxed max-w-xs">
                Ihr Partner für professionelle Abbruch‑, Entkernungs‑ und Sanierungsarbeiten mit Herz, Hand und Verstand.
              </p>
            </div>
            {/* Informationen */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Informationen</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#home" className="hover:text-[#84a12f] transition-colors">
                    Abbruch
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Erdbau
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#84a12f] transition-colors">
                    Tiefbau
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#84a12f] transition-colors">
                    Weitere Dienstleistungen
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#84a12f] transition-colors">
                    Galerie
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#84a12f] transition-colors">
                    Über uns
                  </a>
                </li>
              </ul>
            </div>
            {/* Kontakt details */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Kontakt</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-center">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" style={{ color: "#84a12f" }} />
                  <a href="tel:+4915901425683" className="hover:text-[#84a12f] transition-colors">
                    +49 1590 1425683
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" style={{ color: "#84a12f" }} />
                  <a href="mailto:oliabbruch@gmail.com" className="hover:text-[#84a12f] transition-colors break-all">
                    oliabbruch@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 mt-0.5 flex-shrink-0" style={{ color: "#84a12f" }} />
                  <span>
                    Ariol Demiri
                    <br />
                    Marktplatz 10
                    <br />
                    73650 Winterbach
                  </span>
                </li>
              </ul>
            </div>
            {/* Leistungen */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Leistungen</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Abbruch
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Entkernung
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Demontage
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Rückbau
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Schadstoffsanierung
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#84a12f] transition-colors">
                    Betonbohren
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom row with social icons and copyright */}
          <div className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-center sm:text-left">
              © 2024 Oli Abbruch. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="hover:text-[#84a12f] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-[#84a12f] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-[#84a12f] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}