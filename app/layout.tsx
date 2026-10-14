import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventos & Deco | Alquiler de Plazas, Mobiliario y Decoración',
  description: 'Transformamos tus espacios en experiencias inolvidables. Alquiler de plazas de juego infantiles, castillos inflables, mobiliario y decoración con globos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col justify-between`}>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
