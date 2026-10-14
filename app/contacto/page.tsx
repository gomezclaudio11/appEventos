import React from 'react';
import { WHATSAPP_NUMBER } from '@/data/products';

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Me gustaría ponerme en contacto para coordinar un evento.')}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-rose-600 font-bold text-sm tracking-wider uppercase block mb-2">
          Estamos para ayudarte
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
          Contacto & Ubicación
        </h1>
        <p className="text-gray-600">
          Comunicate con nosotros para recibir asesoramiento personalizado o coordinar visitas y retiros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        {/* Contact info card */}
        <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-lg space-y-6">
          <h3 className="text-2xl font-black text-gray-900">Canales de Atención</h3>
          
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                💬
              </div>
              <div>
                <p className="font-bold text-gray-900">WhatsApp</p>
                <p className="text-sm">+54 9 11 3009-8333</p>
                <p className="text-xs text-gray-400">Atención rápida de lunes a sábados.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                📍
              </div>
              <div>
                <p className="font-bold text-gray-900">Zona de Cobertura</p>
                <p className="text-sm">Buenos Aires y GBA (CABA y Zona Norte/Sur)</p>
                <p className="text-xs text-gray-400">Envíos y retiros coordinados.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
                ⏰
              </div>
              <div>
                <p className="font-bold text-gray-900">Horarios de Atención</p>
                <p className="text-sm">Lunes a Viernes de 10 a 17hs.<br />Sábados de 10 a 14hs.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        {/* Banner / Graphic side */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-8 sm:p-12 rounded-3xl text-white shadow-xl space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-black">Llegás con una idea. Te vas con una fiesta.</h3>
          <p className="text-rose-100 text-sm leading-relaxed">
            Decoramos tu evento con pasión desde hace años. Contanos qué estás celebrando y nos encargamos de cada detalle.
          </p>
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-rose-600 font-extrabold rounded-xl shadow-md hover:bg-rose-50 transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
