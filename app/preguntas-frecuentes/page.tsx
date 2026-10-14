import React from 'react';
import { faqItems, WHATSAPP_NUMBER } from '@/data/products';

export default function FAQPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Tengo una duda sobre sus servicios que no encontré en las preguntas frecuentes.')}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-rose-600 font-bold text-sm tracking-wider uppercase block mb-2">
          Resolvé tus dudas
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
          Preguntas Frecuentes
        </h1>
        <p className="text-gray-600">
          Todo lo que necesitás saber sobre nuestros servicios de alquiler y decoración.
        </p>
      </div>

      <div className="space-y-6">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-100 shadow-sm space-y-3"
          >
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-black text-sm">
                ?
              </span>
              {faq.question}
            </h3>
            <p className="text-gray-600 pl-11 leading-relaxed text-sm sm:text-base">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-900">¿Tenés otra consulta?</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Escribinos directamente por WhatsApp y te responderemos a la brevedad.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
        >
          Preguntar por WhatsApp
        </a>
      </div>
    </div>
  );
}
