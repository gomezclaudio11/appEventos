'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/data/products';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Quisiera realizar una consulta sobre sus servicios de eventos.')}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              ✨
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Eventos & Deco
              </span>
              <span className="block text-xs font-medium text-gray-500 tracking-wider uppercase">
                Alquileres & Ambientación
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Inicio
            </Link>
            <Link href="/productos" className="hover:text-rose-600 transition-colors">
              Catálogo / Alquileres
            </Link>
            <Link href="/galeria" className="hover:text-rose-600 transition-colors">
              Galería
            </Link>
            <Link href="/preguntas-frecuentes" className="hover:text-rose-600 transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" className="hover:text-rose-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-rose-600 hover:bg-rose-50 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-md text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-md text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
          >
            Catálogo / Alquileres
          </Link>
          <Link
            href="/galeria"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-md text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
          >
            Galería
          </Link>
          <Link
            href="/preguntas-frecuentes"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-md text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-md text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
          >
            Contacto
          </Link>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md"
            >
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
