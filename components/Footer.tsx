'use client';

import React from 'react';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/data/products';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Me gustaría consultar por presupuesto para mi evento.')}`;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-rose-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg">
                ✨
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Eventos & Deco
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Transformamos tus espacios en experiencias inolvidables. Alquiler de mobiliario, plazas infantiles y decoración integral para celebraciones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider text-xs">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-rose-400 transition-colors">
                  Catálogo y Alquileres
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-rose-400 transition-colors">
                  Galería de Eventos
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-rose-400 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider text-xs">
              Categorías Principales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/productos?categoria=alquiler-plazas" className="hover:text-rose-400 transition-colors">
                  Alquiler de Plazas
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=decoracion-globos" className="hover:text-rose-400 transition-colors">
                  Decoración con Globos
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=castillos-inflables" className="hover:text-rose-400 transition-colors">
                  Castillos Inflables
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=mobiliario-rental" className="hover:text-rose-400 transition-colors">
                  Mobiliario & Rental
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider text-xs">
              Contacto Directo
            </h4>
            <p className="text-sm text-gray-400">
              Buenos Aires, Argentina<br />
              Atención personalizada vía WhatsApp
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors"
            >
              <span>Escribinos por WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Eventos & Deco. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/contacto" className="hover:text-gray-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-gray-400 transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
