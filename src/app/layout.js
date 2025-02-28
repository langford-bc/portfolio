// app/layout.js
import Link from 'next/link';
import './globals.css'; // Ensure this exists or adjust the path

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-center gap-6">
            <Link href="/" className="text-black hover:text-gray-600 px-4 py-2">
              Home
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 px-4 py-2">
              Projects
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 px-4 py-2">
              Contact
            </Link>
          </div>
        </nav>
        {children} {/* Ensure this is present and correctly indented */}
      </body>
    </html>
  );
}
// app/layout.js

