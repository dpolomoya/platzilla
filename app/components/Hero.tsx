"use client";

import { FaFacebookF, FaTwitter, FaBehance, FaDribbble } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-6 py-20 md:py-32 gap-10">
      {/* 🔹 Imagen con máscara SVG personalizada */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div
          className="relative w-full h-[60vh] md:h-[80vh]"
          style={{
            WebkitMaskImage: "url('/blob.svg')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            maskImage: "url('/blob.svg')",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3270"
            alt="Creative team working"
            className="absolute inset-0 w-full h-full object-cover scale-80"
          />
        </div>
      </div>

      {/* 🔹 Texto a la derecha */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
         Transformamos empresas  <br />desencarriladas empresas con objetivos, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            rutinas,

          </span>{" "}
          velocidad y motivación.
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-lg">
          Platzilla raíles es un programa de transformación empresarial basado en sistemas, software, IA y mejores prácticas empresariales. Su empresa pasará a disponer de formadores y auditores de gestión acompañándole en el su proceso de encarrilamiento
        </p>
 
      </div>
    </section>
  );
}
