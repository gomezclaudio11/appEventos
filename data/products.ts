import { Product, Category, GalleryItem, FAQItem } from '@/types';

export const WHATSAPP_NUMBER = "5491130098333"; // Example WhatsApp number

export const categories: Category[] = [
  {
    id: '1',
    name: 'Alquiler de Plazas',
    slug: 'alquiler-plazas',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    description: 'Espacios de juego seguros, montessori y temáticos para los más chicos.'
  },
  {
    id: '2',
    name: 'Decoración con Globos',
    slug: 'decoracion-globos',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description: 'Arcos orgánicos, bouquets, columnas y paredes de globos personalizados.'
  },
  {
    id: '3',
    name: 'Castillos Inflables',
    slug: 'castillos-inflables',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    description: 'Castillos blancos inflables estéticos y divertidos para todo tipo de eventos.'
  },
  {
    id: '4',
    name: 'Mobiliario & Rental',
    slug: 'mobiliario-rental',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Livings, mesas rústicas, sillas Chiavari, gazebos y barras.'
  },
  {
    id: '5',
    name: 'Kits Deco Cumple',
    slug: 'kits-deco',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    description: 'Kits temáticos en papel y deco sustentable listos para armar tu mesa dulce.'
  }
];

export const products: Product[] = [
  {
    id: 'plaza-nordica',
    title: 'Plaza Nórdica - Alquiler',
    category: 'Alquiler de Plazas',
    categorySlug: 'alquiler-plazas',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    description: 'Incluye pelotero tipi de madera, autito pata pata nórdico, carpa, tobogán, balancín y piso de goma Eva.',
    features: ['Incluye armado y desarmado', 'Piso de goma Eva incluido', 'Ideal niños de 1 a 5 años'],
    featured: true
  },
  {
    id: 'castillo-blanco-inflable',
    title: 'Castillo Blanco Inflable Premium',
    category: 'Castillos Inflables',
    categorySlug: 'castillos-inflables',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    description: 'Hermoso castillo inflable en tono blanco estético, perfecto para cumpleaños, bautismos y casamientos.',
    features: ['Superficie de salto amplia', 'Diseño elegante para fotos', 'Incluye motor inflador y alfombra de recepción'],
    featured: true
  },
  {
    id: 'arco-organico-globos',
    title: 'Arco Orgánico de Globos Personalizado',
    category: 'Decoración con Globos',
    categorySlug: 'decoracion-globos',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description: 'Diseño de arco orgánico adaptado a la paleta de colores de tu evento. Se entrega listo para montar o retirar.',
    features: ['Colores 100% personalizados', 'Duración garantizada', 'Incluye estructura de soporte'],
    featured: true
  },
  {
    id: 'mobiliario-rustico-50',
    title: 'Mobiliario Rústico para 50 personas',
    category: 'Mobiliario & Rental',
    categorySlug: 'mobiliario-rental',
    price: 590000,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Juego completo de mesas y bancos de madera sólida rústica para eventos campestres o al aire libre.',
    features: ['Capacidad para 50 invitados', 'Madera laqueada de alta calidad', 'Flete y armado bonificado en zona'],
    featured: true
  },
  {
    id: 'plaza-granja',
    title: 'Plaza Temática Granja',
    category: 'Alquiler de Plazas',
    categorySlug: 'alquiler-plazas',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    description: 'Plaza blanda temática con animales de la granja, rampa, trepadora y vallas decorativas.',
    features: ['Temática granja interactiva', 'Elementos lavables y sanitizados', 'Alfombra de césped sintético'],
    featured: true
  },
  {
    id: 'kit-deco-dinos',
    title: 'Kit Deco Cumple - Dinosaurios',
    category: 'Kits Deco Cumple',
    categorySlug: 'kits-deco',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    description: 'Kit sustentable en papel de diseño exclusivo para ambientar la mesa principal con temática dinos.',
    features: ['Banderín, toppers y carteles', 'Diseño ecológico reutilizable', 'Envío a todo el país'],
    featured: true
  },
  {
    id: 'living-caña-boho',
    title: 'Living de Caña Línea Boho',
    category: 'Mobiliario & Rental',
    categorySlug: 'mobiliario-rental',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Sofá de caña, sillones individuales Gervasoni con almohadones de tussor y mesa ratona.',
    features: ['Estilo boho chic moderno', 'Almohadones lavables', 'Ideal para recepción y fotos'],
    featured: false
  },
  {
    id: 'bouquet-globos-helio',
    title: 'Bouquets de Globos con Helio',
    category: 'Decoración con Globos',
    categorySlug: 'decoracion-globos',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    description: 'Ramilletes de globos inflados con helio con pesas decorativas combinadas.',
    features: ['Duración prolongada', 'Variedad de colores y foils', 'Perfectos para centros de mesa'],
    featured: false
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Cumpleaños 1 Añito - Temática Bosque',
    category: 'Decoración y Plazas',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Casamiento al aire libre con Living Boho',
    category: 'Rental',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Bautismo con Castillo Blanco Inflable',
    category: 'Castillos',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Plaza Nórdica en Salón de Fiestas',
    category: 'Plazas de Juego',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Ambientación Cumple Infantil Granja',
    category: 'Decoración',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Mesa Dulce con Kit Papel Sustentable',
    category: 'Kits Deco',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
  }
];

export const faqItems: FAQItem[] = [
  {
    question: '¿Cómo se realizan las reservas y cotizaciones?',
    answer: 'Todas nuestras reservas y presupuestos se gestionan de forma rápida y personalizada a través de WhatsApp. Haces clic en "Cotizar por WhatsApp" en el producto que te interese y te responderemos a la brevedad con disponibilidad y detalles.'
  },
  {
    question: '¿Con cuánta anticipación debemos encargar?',
    answer: 'Recomendamos reservar con al menos 7 a 15 días de anticipación para garantizar la disponibilidad de la fecha, especialmente para fines de semana.'
  },
  {
    question: '¿Incluyen servicio de armado y traslado?',
    answer: 'Sí, la mayoría de nuestros servicios de alquiler de plazas, castillos y mobiliario incluyen traslado, armado y retiro en la zona (consultar costos según localidad).'
  },
  {
    question: '¿Cuáles son los medios de pago aceptados?',
    answer: 'Aceptamos transferencias bancarias, efectivo y tarjetas de crédito/débito a través de links de pago seguros.'
  }
];
