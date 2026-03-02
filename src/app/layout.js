// src/app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Deen Karim | Content Director & Creative Strategist',
  description: 'Portfolio of Deen Karim, an expert in storytelling, strategy, and creative direction with 20+ years of experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans selection:bg-brand-black selection:text-brand-white bg-white">
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference bg-transparent py-6 lg:py-8">
          <nav className="container-wide flex justify-between items-center">
            <Link 
              href="/" 
              className="text-white text-xl font-bold tracking-tighter uppercase"
            >
              DK.
            </Link>
            <div className="flex gap-10">
              <Link
                href="/"
                className="text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-60 transition-opacity"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-60 transition-opacity"
              >
                Connect
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-12 border-t border-brand-gray-light">
          <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid">
              © {new Date().getFullYear()} Deen Karim — Hamburg & Toronto
            </span>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest text-brand-black font-bold hover:text-brand-gray-mid">LinkedIn</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-brand-black font-bold hover:text-brand-gray-mid">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
