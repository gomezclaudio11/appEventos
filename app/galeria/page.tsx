import React from 'react';
import Image from 'next/image';
import { galleryItems, WHATSAPP_NUMBER } from '@/data/products';

export default function GalleryPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Vi sus trabajos en la galería y me gustaría replicar una decoración similar para mi evento.')}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-rose-600 font-bold text-sm tracking-wider uppercase block mb-2">
          Momentos Inolvidables
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
          Galería de Eventos Realizados
        </h1>
        <p className="text-gray-600">
          Cada imagen cuenta una historia. Así preparamos y ambientamos las celebraciones de nuestros clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-rose-50 border border-rose-100"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-1">
                {item.category}
              </span>
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="bg-rose-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-black">
          ¿Te gustó alguna de estas propuestas para tu fiesta?
        </h2>
        <p className="text-rose-100 max-w-xl mx-auto text-sm sm:text-base">
          Personalizamos cada detalle en colores, temática y presupuesto según tus necesidades.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-rose-950 font-extrabold rounded-2xl shadow-lg transition-colors"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
