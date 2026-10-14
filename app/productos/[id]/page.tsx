import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, WHATSAPP_NUMBER } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const message = encodeURIComponent(`¡Hola! Me interesa consultar disponibilidad y presupuesto para el producto: *${product.title}*. ¿Podrían darme más info?`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 gap-2">
        <Link href="/" className="hover:text-rose-600">Inicio</Link>
        <span>/</span>
        <Link href="/productos" className="hover:text-rose-600">Catálogo</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.title}</span>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-lg bg-rose-50 border border-rose-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-2xl font-extrabold text-rose-600">
              ${product.price.toLocaleString('es-AR')}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {product.features && product.features.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">
                ¿Qué incluye el servicio?
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
            >
              <span>Consultar / Reservar por WhatsApp</span>
            </a>
            <p className="text-xs text-center text-gray-400">
              Consulta disponibilidad de fecha sin compromiso ni pago online previo.
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            Productos Similares
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
