import Link from 'next/link'
import { Shield, Eye, Lock, Users, Phone, Mail, Calendar, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Aviso de Privacidad - Invitaciones Digitales',
  description: 'Aviso de privacidad para el manejo de datos personales en invitaciones digitales',
}

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Protección y manejo responsable de tus datos personales
          </p>
          <p className="text-sm opacity-75 mt-4">
            Última actualización: {new Date().toLocaleDateString('es-MX', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Introducción */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tu Privacidad es Importante
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En Invitaciones Digitales, nos comprometemos a proteger y manejar responsablemente 
                toda la información personal que nos proporcionas. Este aviso describe cómo 
                recopilamos, utilizamos y protegemos tus datos.
              </p>
            </div>

            {/* Responsable */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-500" />
                Responsable del Tratamiento
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Invitaciones Digitales</strong><br />
                Teléfono: +52 777 793 7484<br />
                Correo: kodeandoando2023@gmail.com<br />
                Ubicación: México
              </p>
            </div>

            {/* Datos Recopilados */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-pink-500" />
                Datos Personales que Recopilamos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-pink-500" />
                    Información de Contacto
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nombre completo</li>
                    <li>• Número de teléfono</li>
                    <li>• Dirección de correo electrónico</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    Información del Evento
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tipo de evento</li>
                    <li>• Descripción del evento</li>
                    <li>• Fecha y lugar</li>
                    <li>• Preferencias de diseño</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    Contenido Multimedia
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fotografías del evento</li>
                    <li>• Imágenes de invitados</li>
                    <li>• Logos y diseños personalizados</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-pink-500" />
                    Datos de Comunicación
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historial de mensajes</li>
                    <li>• Preferencias de contacto</li>
                    <li>• Feedback y comentarios</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finalidades */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                Finalidades del Tratamiento
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Finalidades Principales:</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Crear y personalizar invitaciones digitales</li>
                    <li>• Proporcionar servicios de diseño y desarrollo</li>
                    <li>• Mantener comunicación durante el proyecto</li>
                    <li>• Enviar cotizaciones y facturas</li>
                    <li>• Brindar soporte técnico y atención al cliente</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Finalidades Secundarias:</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Mejorar nuestros servicios y productos</li>
                    <li>• Enviar información sobre nuevos paquetes</li>
                    <li>• Realizar encuestas de satisfacción</li>
                    <li>• Cumplir con obligaciones legales</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transferencias */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transferencias de Datos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tus datos personales pueden ser transferidos a:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Proveedores de servicios:</strong> Para el desarrollo y hosting de las invitaciones</li>
                <li>• <strong>Plataformas de pago:</strong> Para procesar pagos de manera segura</li>
                <li>• <strong>Autoridades competentes:</strong> Cuando sea requerido por ley</li>
                <li>• <strong>WhatsApp Business:</strong> Para comunicación directa con clientes</li>
              </ul>
            </div>

            {/* Derechos ARCO */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tus Derechos ARCO
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Acceso y Rectificación:</h4>
                  <p className="text-sm text-orange-700">
                    Puedes solicitar conocer qué datos tenemos de ti y corregir información incorrecta.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Cancelación y Oposición:</h4>
                  <p className="text-sm text-orange-700">
                    Puedes solicitar que eliminemos tus datos o nos opongamos a su uso.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Para ejercer tus derechos ARCO:</strong><br />
                  Contacta a: contacto@invitacionesdigitales.com<br />
                  Teléfono: +52 777 793 7484
                </p>
              </div>
            </div>

            {/* Medidas de Seguridad */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Medidas de Seguridad
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Protección Técnica:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Encriptación SSL/TLS</li>
                    <li>• Acceso restringido a datos</li>
                    <li>• Copias de seguridad seguras</li>
                    <li>• Monitoreo de seguridad 24/7</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Protección Organizacional:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Políticas de confidencialidad</li>
                    <li>• Capacitación del personal</li>
                    <li>• Controles de acceso</li>
                    <li>• Auditorías regulares</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies y Tecnologías */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cookies y Tecnologías de Seguimiento
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Mejorar la funcionalidad del sitio web</li>
                <li>• Analizar el tráfico y uso del sitio</li>
                <li>• Personalizar la experiencia del usuario</li>
                <li>• Mantener sesiones seguras</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
                la funcionalidad del sitio.
              </p>
            </div>

            {/* Cambios al Aviso */}
            <div className="border-l-4 border-gray-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cambios al Aviso de Privacidad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. 
                Los cambios serán notificados a través de nuestro sitio web o por correo electrónico. 
                Te recomendamos revisar periódicamente esta página.
              </p>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-r from-cyan-50 to-pink-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Tienes Preguntas?
              </h3>
              <p className="text-gray-700 mb-6">
                Si tienes alguna duda sobre este aviso de privacidad o el manejo de tus datos, 
                no dudes en contactarnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
                  <Link href="/">
                    Volver al Inicio
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <a href="mailto:kodeandoando2023@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contactar
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
} 