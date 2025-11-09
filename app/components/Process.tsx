"use client";

import { FaComments, FaUsers, FaBullseye, FaMoneyBillWave } from "react-icons/fa";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white py-24 px-6 text-center relative overflow-hidden"
    >
      {/* 🔹 Badge superior */}
      

      {/* 🔹 Título */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
         El proceso de encarrillamiento con Platzilla raíles
        </h2>
         
      </div>

      {/* 🔹 Contenedor de pasos */}
      <div className="relative max-w-7xl mx-auto">
        {/* Línea conectora solo visible en pantallas grandes */}
        <div className="hidden md:block absolute top-[56px] left-0 right-0 h-[2px] bg-gray-200 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FaComments className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Diagnóstico inicial
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
Desarrollo de un diagnóstico con 25 puntos críticos en cuanto a la evaluación de las empresas</p>
            
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FaUsers className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Organización de los equipos:
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
Creación de Jerarquía por responsabilidades, en sustitución de un organigrama clásico</p>
            
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FaBullseye className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
             Visión a largo plazo

            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
             Desde 20 años, pasando por 10 años, 5, 3, 1 y trimestralmente, para tener una metas encadenadas.
            </p>
            
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FaMoneyBillWave className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
             Control presupuestario
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
             Constante, mes a mes, para no perder tracción de los recursos.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
