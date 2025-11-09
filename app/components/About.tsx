"use client";

import { FaBullhorn, FaEnvelopeOpenText, FaChartLine, FaProjectDiagram } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24 px-6 text-center relative overflow-hidden"
    >
      {/* 🔹 Título */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
         Los complementos que tu empresa necesita 
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
           para crecer de manera continua y predecible
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Platzilla raíles organiza en rutinas tus departamentos y personas para que nada sea al azar
        </p>
      </div>

      {/* 🔹 Cuatro servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg mb-6">
            <FaProjectDiagram className="text-white text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
           Organización de datos
          </h3>
          <p className="text-gray-600 text-base">
            Organizamos en Platzilla toda la
Información
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg mb-6">
            <FaBullhorn className="text-white text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
           Comunicación rutinas
          </h3>
          <p className="text-gray-600 text-base">
            Formación del equipo y comunicación de cómo realizar las mismas
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg mb-6">
            <FaChartLine className="text-white text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Generación de indicadores

          </h3>
          <p className="text-gray-600 text-base">
           Para el seguimiento continuo en las auditorias
          </p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg mb-6">
            <FaEnvelopeOpenText className="text-white text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Generación informes
          </h3>
          <p className="text-gray-600 text-base">
         Evaluación del avance por áreas y personas
          </p>
        </div>
      </div>
    </section>
  );
}
