"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🔹 Información de contacto */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
             ¿Alguna pregunta?
            </h3>
            <p className="text-gray-600 text-lg">
             Por favor contáctenos.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-4xl">👍</div>
            <div>
              <p className="text-gray-500">Call us for immediate support</p>
              <p className="text-xl font-semibold text-gray-900">
                +34 675 21 51 74
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-4xl">📧</div>
            <div>
              <p className="text-gray-500">Send us an email for inquiries</p>
              <p className="text-xl font-semibold text-gray-900">
                info@platzilla.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-4xl">📍</div>
            <div>
              <p className="text-gray-500">Our office</p>
              <p className="text-xl font-semibold text-gray-900">
                San Marcos 43, 28004 Madrid
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 Google Maps */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.442054245798!2d-3.698939923141448!3d40.42120947143894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422885b7ef3111%3A0xa28eaaf6d143cf8f!2sC.%20de%20San%20Marcos%2C%2043%2C%20Centro%2C%2028004%20Madrid!5e0!3m2!1ses!2ses!4v1762634306095!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
