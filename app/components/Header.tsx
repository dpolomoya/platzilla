"use client";

import { useState } from "react";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* 🔹 Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="https://app.platzilla.com/themes/centaurus/img/logo-platzilla-vert.png"
            alt="Logo Plantilla Rails"
            className="h-10 w-auto"
          />
        </a>

        {/* 🔹 Menú principal (desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <a href="#home" className="hover:text-red-600 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-600 transition">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#process" className="hover:text-red-600 transition">
              El Proceso
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-600 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* 🔹 Icono Sign In */}
        <div className="flex items-center space-x-6">
          <a
            href="https://app.platzilla.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-red-600 transition text-2xl"
          >
            <FaSignInAlt />
          </a>

          {/* 🔹 Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* 🔹 Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                El Proceso
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
