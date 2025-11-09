"use client";

import { FaArrowUp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1b1c2a] text-gray-300 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* 🔹 Logo + texto */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="https://app.platzilla.com/themes/centaurus/img/logo-platzilla-vert.png"
              alt="Platzilla Logo"
              width={250}
              height={50}
            />
            <div>
            
            </div>
          </div>
        </div>

        {/* 🔹 Dirección / contacto */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li>
              📍 San Marcos 43, 28004 Madrid
            </li>
            <li>
              📧 <a href="mailto:info@platzilla.com" className="hover:text-white">info@platzilla.com</a>
            </li>
            <li>
              📞 <a href="tel:+34675215174" className="hover:text-white">675 21 51 74</a>
            </li>
          </ul>
        </div>

        {/* 🔹 Quick Menu */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Menu</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-white">Inicio</a></li>
            <li><a href="#about" className="hover:text-white">Acerca de</a></li>
            <li><a href="#process" className="hover:text-white">El proceso</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* 🔹 Línea divisoria */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Platzilla. Todos los derechos reservados.
      </div>

      {/* 🔹 Botón subir arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
