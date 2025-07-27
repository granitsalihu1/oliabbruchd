'use client';

import { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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
      {/* Header */}
      <Header currentPage="gallery" />

      {/* Gallery Grid */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-12 md:pb-16 lg:pb-20 bg-white">
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

      {/* Service area section between gallery and footer */}
      <section id="servicegebiet" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#84a12f]/10 mb-2 md:mb-0 flex-shrink-0">
              <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#84a12f]">📍</span>
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
      <Footer />
    </div>
  );
}