import Link from 'next/link'
import { FileText, CheckCircle, AlertTriangle, Clock, DollarSign, Shield, Users, Calendar, Camera, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Términos y Condiciones - Invitaciones Digitales',
  description: 'Términos y condiciones para el uso de servicios de invitaciones digitales',
}

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Condiciones de uso y prestación de servicios de invitaciones digitales
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
                Acuerdo de Servicios
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Al contratar nuestros servicios de invitaciones digitales, aceptas los siguientes 
                términos y condiciones que rigen la relación comercial entre tú y Invitaciones Digitales.
              </p>
            </div>

            {/* Definiciones */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                Definiciones
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>&ldquo;Cliente&rdquo;:</strong> La persona física o moral que contrata nuestros servicios.</p>
                <p><strong>&ldquo;Servicios&rdquo;:</strong> La creación, diseño y desarrollo de invitaciones digitales.</p>
                <p><strong>&ldquo;Contenido&rdquo;:</strong> Imágenes, textos, música y elementos multimedia proporcionados por el cliente.</p>
                <p><strong>&ldquo;Entregable&rdquo;:</strong> La invitación digital finalizada y lista para uso.</p>
                <p><strong>&ldquo;Plazo de entrega&rdquo;:</strong> El tiempo acordado para la entrega del proyecto.</p>
              </div>
            </div>

            {/* Servicios Ofrecidos */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Servicios Ofrecidos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Paquete Básico
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Cuenta regresiva</li>
                    <li>• Información del evento</li>
                    <li>• Confirmación de asistencia</li>
                    <li>• Opciones de regalo</li>
                    <li>• Código de vestimenta</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Paquete Premium
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Todo del Básico</li>
                    <li>• Música personalizada</li>
                    <li>• Galería de fotos</li>
                    <li>• Lista de padrinos</li>
                    <li>• Invitación completa</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Paquete VIP
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Todo del Premium</li>
                    <li>• Hospedaje recomendado</li>
                    <li>• Itinerario completo</li>
                    <li>• Pases de invitados</li>
                    <li>• Playlist múltiple</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Servicios Adicionales
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Modificaciones post-entrega</li>
                    <li>• Hosting extendido</li>
                    <li>• Soporte técnico</li>
                    <li>• Capacitación de uso</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proceso de Trabajo */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                Proceso de Trabajo
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">1. Consulta Inicial</h4>
                  <p className="text-sm text-purple-700">
                    Contacto por WhatsApp para discutir necesidades, tipo de evento y paquete deseado.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">2. Cotización y Acuerdo</h4>
                  <p className="text-sm text-purple-700">
                    Presentación de cotización detallada y acuerdo de términos de trabajo.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">3. Recopilación de Contenido</h4>
                  <p className="text-sm text-purple-700">
                    El cliente proporciona imágenes, textos, música y elementos necesarios.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">4. Desarrollo y Diseño</h4>
                  <p className="text-sm text-purple-700">
                    Creación de la invitación digital según especificaciones acordadas.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">5. Revisión y Ajustes</h4>
                  <p className="text-sm text-purple-700">
                    Presentación de avances y realización de modificaciones solicitadas.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">6. Entrega Final</h4>
                  <p className="text-sm text-purple-700">
                    Entrega de la invitación digital completa y funcional.
                  </p>
                </div>
              </div>
            </div>

            {/* Plazos y Entregas */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Plazos y Entregas
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Plazos Estándar:</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>Urgente:</strong> 24-48 horas (costo adicional)</li>
                    <li>• <strong>Estándar:</strong> 3-5 días hábiles</li>
                    <li>• <strong>Complejo:</strong> 7-10 días hábiles</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Factores que Afectan el Plazo:</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• Complejidad del diseño solicitado</li>
                    <li>• Cantidad de contenido a integrar</li>
                    <li>• Disponibilidad del cliente para revisiones</li>
                    <li>• Temporada alta (mayo-diciembre)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Forma de Entrega:</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• Enlace directo a la invitación digital</li>
                    <li>• Código QR para compartir</li>
                    <li>• Instrucciones de uso y personalización</li>
                    <li>• Soporte técnico inicial</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pagos y Precios */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Pagos y Precios
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Estructura de Pagos:</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Pago al recibir:</strong> 100% al momento de la entrega</li>
                    <li>• <strong>Pago anticipado:</strong> 50% al iniciar, 50% al entregar</li>
                    <li>• <strong>Proyectos complejos:</strong> 30% al iniciar, 40% al 50% de avance, 30% al entregar</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Métodos de Pago:</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Transferencia bancaria</li>
                    <li>• Depósito en efectivo</li>
                    <li>• Pago móvil (SPEI)</li>
                    <li>• Otras opciones según disponibilidad</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Precios Base (MXN):</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Paquete Básico:</strong> $299</li>
                    <li>• <strong>Paquete Premium:</strong> $499</li>
                    <li>• <strong>Paquete VIP:</strong> $699</li>
                    <li>• <strong>Servicios adicionales:</strong> Según cotización</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Obligaciones del Cliente */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-500" />
                Obligaciones del Cliente
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Proporcionar Contenido:</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Imágenes en alta calidad y formato adecuado</li>
                    <li>• Textos corregidos y finalizados</li>
                    <li>• Información completa del evento</li>
                    <li>• Música libre de derechos de autor (si aplica)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Comunicación Oportuna:</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Responder a consultas en máximo 48 horas</li>
                    <li>• Proporcionar feedback claro y específico</li>
                    <li>• Notificar cambios de última hora con anticipación</li>
                    <li>• Mantener comunicación activa durante el proyecto</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Derechos de Uso:</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Asegurar que tiene derechos sobre el contenido proporcionado</li>
                    <li>• No utilizar contenido de terceros sin autorización</li>
                    <li>• Respetar derechos de autor y propiedad intelectual</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Obligaciones de Invitaciones Digitales */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Obligaciones de Invitaciones Digitales
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Calidad del Servicio:</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Entregar trabajo de alta calidad profesional</li>
                    <li>• Cumplir con los plazos acordados</li>
                    <li>• Realizar las modificaciones incluidas en el paquete</li>
                    <li>• Proporcionar soporte técnico inicial</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Confidencialidad:</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Mantener confidencialidad de la información del cliente</li>
                    <li>• No compartir contenido con terceros</li>
                    <li>• Proteger datos personales según aviso de privacidad</li>
                    <li>• Eliminar archivos temporales después del proyecto</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Comunicación:</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Mantener comunicación clara y oportuna</li>
                    <li>• Informar sobre avances del proyecto</li>
                    <li>• Responder consultas en máximo 24 horas</li>
                    <li>• Notificar cualquier retraso o problema</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modificaciones y Cambios */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Modificaciones y Cambios
              </h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Modificaciones Incluidas:</h4>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• <strong>Paquete Básico:</strong> 2 modificaciones menores</li>
                    <li>• <strong>Paquete Premium:</strong> 3 modificaciones menores</li>
                    <li>• <strong>Paquete VIP:</strong> 5 modificaciones menores</li>
                    <li>• <strong>Modificaciones menores:</strong> Cambios de texto, colores, fuentes</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Modificaciones Adicionales:</h4>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• <strong>Cambios estructurales:</strong> $50 - $100 MXN por cambio</li>
                    <li>• <strong>Nuevas funcionalidades:</strong> Según cotización</li>
                    <li>• <strong>Cambios de diseño completo:</strong> 50% del valor del paquete</li>
                    <li>• <strong>Urgencia:</strong> 30% adicional por urgencia</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Límites de Modificaciones:</h4>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• Las modificaciones deben solicitarse dentro de los 30 días posteriores a la entrega</li>
                    <li>• No se incluyen cambios de concepto o rediseño completo</li>
                    <li>• Los cambios deben ser específicos y claros</li>
                    <li>• Se requiere confirmación por escrito de las modificaciones</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Propiedad Intelectual */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Propiedad Intelectual
              </h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Derechos del Cliente:</h4>
                  <ul className="text-sm text-indigo-700 space-y-2">
                    <li>• Uso exclusivo de la invitación digital creada</li>
                    <li>• Derecho a modificar el contenido (no el código)</li>
                    <li>• Propiedad del contenido proporcionado</li>
                    <li>• Licencia de uso perpetua de la invitación</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Derechos de Invitaciones Digitales:</h4>
                  <ul className="text-sm text-indigo-700 space-y-2">
                    <li>• Propiedad del código y estructura técnica</li>
                    <li>• Derecho a usar el proyecto como portafolio</li>
                    <li>• Propiedad de las librerías y frameworks utilizados</li>
                    <li>• Derecho a reutilizar elementos técnicos en otros proyectos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitación de Responsabilidad */}
            <div className="border-l-4 border-gray-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Limitación de Responsabilidad
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Alcance de la Responsabilidad:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• La responsabilidad se limita al valor del proyecto contratado</li>
                    <li>• No cubrimos daños indirectos o consecuenciales</li>
                    <li>• No garantizamos compatibilidad con todos los dispositivos</li>
                    <li>• No nos responsabilizamos por contenido proporcionado por el cliente</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusiones:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Pérdida de datos por fallas técnicas del cliente</li>
                    <li>• Daños por uso indebido de la invitación</li>
                    <li>• Problemas de conectividad o hosting externo</li>
                    <li>• Modificaciones realizadas por terceros</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resolución de Disputas */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Resolución de Disputas
              </h3>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Proceso de Resolución:</h4>
                  <ul className="text-sm text-pink-700 space-y-2">
                    <li>• <strong>1er paso:</strong> Comunicación directa para resolver diferencias</li>
                    <li>• <strong>2do paso:</strong> Mediación informal si es necesario</li>
                    <li>• <strong>3er paso:</strong> Arbitraje o procedimiento legal si aplica</li>
                    <li>• <strong>Jurisdicción:</strong> Tribunales de México</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Garantías:</h4>
                  <ul className="text-sm text-pink-700 space-y-2">
                    <li>• Garantía de funcionamiento por 30 días</li>
                    <li>• Corrección de errores técnicos sin costo</li>
                    <li>• Soporte técnico inicial incluido</li>
                    <li>• Reembolso parcial en caso de incumplimiento grave</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disposiciones Finales */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Disposiciones Finales
              </h3>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Modificaciones a los Términos:</h4>
                  <p className="text-sm text-teal-700">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                    Los cambios serán notificados a través de nuestro sitio web. El uso continuado 
                    de nuestros servicios constituye aceptación de los nuevos términos.
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Vigencia:</h4>
                  <p className="text-sm text-teal-700">
                    Estos términos entran en vigor desde su publicación y se aplican a todos los 
                    servicios contratados a partir de esa fecha.
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Contacto:</h4>
                  <p className="text-sm text-teal-700">
                    Para cualquier duda sobre estos términos, contacta a:<br />
                    <strong>Invitaciones Digitales</strong><br />
                    Teléfono: +52 777 793 7484<br />
                    Correo: kodeandoando2023@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Tienes Preguntas?
              </h3>
              <p className="text-gray-700 mb-6">
                Si tienes alguna duda sobre estos términos y condiciones, 
                no dudes en contactarnos para aclarar cualquier punto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link href="/">
                    Volver al Inicio
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  <a href="mailto:kodeandoando2023@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contactar
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  <a href="https://wa.me/527777937484">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
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