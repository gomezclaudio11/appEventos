# 🎉 Eventos & Deco

Sitio web moderno y optimizado para emprendimientos de alquiler de mobiliario, plazas infantiles, castillos inflables y decoración integral para eventos. Diseñado para ofrecer una experiencia rápida, visual y sin fricciones, conectando directamente a los clientes con un flujo de cotización y reserva por **WhatsApp**.

---

## 🛠️ Herramientas y Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router con Server & Client Components)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Diseño moderno, limpio y 100% responsive)
- **Iconos & Componentes:** UI nativa adaptada con Tailwind
- **Despliegue:** [Vercel](https://vercel.com/)

---

## 🚀 Características Principales

1. **Flujo 100% WhatsApp:** Cada producto y servicio cuenta con un botón dinámico que abre WhatsApp con un mensaje preconfigurado (ej: *"¡Hola! Me interesa consultar disponibilidad y presupuesto para el producto: Plaza Nórdica"*).
2. **Catálogo con Filtros y Búsqueda:** Listado de productos filtrable por categoría (Alquiler de Plazas, Decoración con Globos, Castillos Inflables, Mobiliario & Rental, Kits de Cumple) y buscador en tiempo real.
3. **Detalle de Productos:** Páginas individuales para cada ítem con galería de imágenes, descripciones y listado de especificaciones ("¿Qué incluye?").
4. **Galería de Trabajos Realizados:** Sección visual para mostrar ambientaciones anteriores.
5. **Preguntas Frecuentes y Contacto:** Resolución de dudas comunes y canales de atención rápida.

---

## 📂 Estructura del Proyecto

```text
appEventos/
├── app/                  # Páginas y rutas de Next.js (App Router)
│   ├── page.tsx          # Página principal (Home)
│   ├── layout.tsx        # Layout global (Navbar, Footer, WhatsApp flotante)
│   ├── productos/        # Catálogo y detalle dinámico de productos
│   ├── galeria/          # Galería de eventos
│   ├── preguntas-frecuentes/ # FAQ
│   └── contacto/         # Información de contacto y ubicación
├── components/           # Componentes reutilizables (Navbar, Footer, ProductCard, etc.)
├── data/                 # Base de datos local (products.ts)
├── public/               # Imágenes y recursos estáticos
└── package.json          # Dependencias y scripts
```

---

## ⚙️ ¿Cómo funciona la gestión manual de fotos y datos?

Para mantener el sitio simple, rápido y sin dependencias de paneles externos, todo el contenido se administra de forma local:

1. **Imágenes:** Las fotos se almacenan en la carpeta `public/` o se enlazan mediante URLs externas en alta calidad.
2. **Productos y Catálogo:** Se gestionan desde el archivo `data/products.ts`. Para agregar, modificar o eliminar un producto, solo debes editar este archivo:

```typescript
export const products: Product[] = [
  {
    id: 'mi-nuevo-producto',
    title: 'Nuevo Alquiler / Decoración',
    category: 'Alquiler de Plazas',
    categorySlug: 'alquiler-plazas',
    price: 50000,
    image: '/tu-imagen.jpg',
    description: 'Descripción detallada...',
    features: ['Característica 1', 'Característica 2'],
    featured: true
  }
];
```

---

## 🏃‍♂️ Cómo iniciar el proyecto en local

1. Clonar el repositorio e instalar dependencias:
   ```bash
   git clone <url-de-tu-repositorio>
   cd appEventos
   npm install
   ```

2. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 🚢 Despliegue en Vercel

El proyecto está optimizado para desplegarse en segundos en **Vercel**:
1. Subí tu código a un repositorio en GitHub.
2. Conectá el repositorio en [Vercel](https://vercel.com/).
3. Vercel detectará Next.js automáticamente. Hacé clic en **Deploy** y ¡listo!
