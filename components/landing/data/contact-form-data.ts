export const contactFormData = {
  title: "¡Contáctanos!",
  subtitle: "Cuéntanos sobre tu evento y te ayudaremos a crear la invitación perfecta",
  
  // Tipos de eventos disponibles
  eventTypes: [
    { value: "boda", label: "Boda", icon: "💒" },
    { value: "quince", label: "XV Años", icon: "👑" },
    { value: "bautizo", label: "Bautizo", icon: "👶" },
    { value: "cumpleanos", label: "Cumpleaños", icon: "🎂" },
    { value: "corporativo", label: "Evento Corporativo", icon: "🏢" },
    { value: "otro", label: "Otro", icon: "🎉" }
  ],
  
  // Configuración del WhatsApp
  whatsapp: {
    phone: "7777937484",
    countryCode: "52", // México
    messageTemplate: (name: string, eventType: string, description: string) => {
      const eventTypeLabel = contactFormData.eventTypes.find(t => t.value === eventType)?.label || eventType;
      
      return `¡Hola! Me interesa una invitación digital personalizada.

📋 Información del evento:
• Nombre: ${name}
• Tipo de evento: ${eventTypeLabel}
• Descripción: ${description}

🎯 Me gustaría conocer más sobre sus paquetes y precios.

¡Gracias!`;
    }
  },
  
  // Mensajes de validación
  validation: {
    name: {
      required: "El nombre es obligatorio",
      minLength: "El nombre debe tener al menos 2 caracteres",
      maxLength: "El nombre no puede exceder 50 caracteres"
    },
    eventType: {
      required: "Por favor selecciona el tipo de evento"
    },
    description: {
      required: "Por favor describe tu evento",
      minLength: "La descripción debe tener al menos 10 caracteres",
      maxLength: "La descripción no puede exceder 200 caracteres"
    }
  },
  
  // Textos del formulario
  form: {
    nameLabel: "Tu nombre completo",
    namePlaceholder: "Ej: María González",
    eventTypeLabel: "Tipo de evento",
    eventTypePlaceholder: "Selecciona el tipo de evento",
    descriptionLabel: "Descripción de tu evento",
    descriptionPlaceholder: "Cuéntanos sobre tu evento, fecha, lugar, tema, etc.",
    submitButton: "Enviar WhatsApp",
    cancelButton: "Cancelar"
  },
  
  // Mensajes de confirmación
  messages: {
    success: "¡Perfecto! Se abrirá WhatsApp con tu mensaje",
    error: "Por favor completa todos los campos correctamente",
    loading: "Preparando mensaje..."
  }
}; 