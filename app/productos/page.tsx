'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('categoria');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'todos' || product.categorySlug === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
          Catálogo y Alquileres
        </h1>
        <p className="text-gray-600">
          Explorá nuestra variedad de equipamiento, plazas de juego, castillos y decoraciones.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === 'todos'
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-rose-500 text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-lg font-semibold text-gray-700 mb-2">No se encontraron productos</p>
          <p className="text-sm text-gray-500">Probá buscando con otros términos o cambiando de categoría.</p>
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Cargando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
