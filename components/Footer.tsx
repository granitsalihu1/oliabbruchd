import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a3d1a] text-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Branding and tagline */}
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/dcc-removebg-preview.png"
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
                <Link href="/" className="hover:text-[#84a12f] transition-colors">
                  Abbruch
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Erdbau
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#84a12f] transition-colors">
                  Tiefbau
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Weitere Dienstleistungen
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#84a12f] transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#84a12f] transition-colors">
                  Über uns
                </Link>
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
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Abbruch
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Entkernung
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Demontage
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Rückbau
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Schadstoffsanierung
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#84a12f] transition-colors">
                  Betonbohren
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom row with social icons and copyright */}
        <div className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            © 2024 Oli Abbruch. Alle Rechte vorbehalten. Designed by Eclipse Branding
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
  );
}