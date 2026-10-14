import Link from 'next/link';
import Image from 'next/image';
import { products, categories, WHATSAPP_NUMBER } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Me gustaría cotizar la organización y decoración de mi próximo evento.')}`;

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 lg:py-32 overflow-hidden border-b border-rose-100">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold tracking-wide">
                ✨ Especialistas en Experiencias Únicas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                Llegás con una idea.{' '}
                <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Te vas con una fiesta.
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Alquiler de plazas de juego infantiles, castillos inflables, mobiliario rústico/boho y decoración integral con globos para celebraciones inolvidables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  href="/productos"
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Ver Catálogo y Alquileres
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hero image grid / showcase */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Decoración de fiesta"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xl">
                  🎈
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">+500 Eventos</p>
                  <p className="text-xs text-gray-500">Realizados con éxito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-3">
            Explorá nuestras categorías
          </h2>
          <p className="text-gray-600">
            Todo lo que necesitás para ambientar y equipar tu celebración en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/productos?categoria=${cat.slug}`}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="relative z-10 text-white">
                <h3 className="text-lg font-bold mb-1 group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-200 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-1">
              Productos y Alquileres Destacados
            </h2>
            <p className="text-gray-600">Lo más elegido por nuestros clientes para sus fiestas.</p>
          </div>
          <Link
            href="/productos"
            className="px-6 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold rounded-xl transition-colors text-sm"
          >
            Ver todo el catálogo →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* How it works banner */}
      <section className="bg-rose-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-wider block mb-2">
              Simple y Rápido
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              ¿Cómo funciona nuestro servicio?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-400 text-rose-950 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold">Elegí lo que necesitás</h3>
              <p className="text-rose-100 text-sm">
                Navegá por nuestro catálogo online y seleccioná los alquileres o decoraciones ideales para tu fecha.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-400 text-rose-950 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold">Cotizá por WhatsApp</h3>
              <p className="text-rose-100 text-sm">
                Hacé clic en el botón de WhatsApp. Te asesoraremos sin cargo sobre disponibilidad, colores y temática.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-400 text-rose-950 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold">Disfrutá tu evento</h3>
              <p className="text-rose-100 text-sm">
                Coordinamos la entrega, el armado o el retiro en nuestro local. ¡Vos dedicate solo a disfrutar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-3xl font-black">¿Tenés una fecha agendada?</h2>
            <p className="text-rose-100 max-w-xl">
              Escribinos hoy mismo y comencemos a diseñar la ambientación perfecta para tu fiesta.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-rose-600 font-extrabold rounded-2xl shadow-lg hover:bg-rose-50 transition-colors whitespace-nowrap"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
