
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">UrbanStay</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex gap-6 items-center text-gray-700 text-sm font-medium`}>
          <Link href="/">Home</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/servizi">Servizi</Link>
          <Link href="/regole">Regole della casa</Link>
          <Link href="/checkin">Check-in / Check-out</Link>
          <div
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
            className="relative cursor-pointer"
          >
            <span>Cosa fare a...</span>
            {showSubMenu && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg p-2 space-y-2 text-sm z-50">
                <Link href="/vercelli" className="block hover:text-blue-600">Vercelli e dintorni</Link>
                <Link href="/duisburg" className="block hover:text-blue-600">Duisburg e dintorni</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
