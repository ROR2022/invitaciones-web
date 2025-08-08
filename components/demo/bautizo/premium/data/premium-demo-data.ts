// Datos demo para el paquete premium de bautizo
export const premiumDemoData = {
  hero: {
    name: "Santiago Alejandro",
    subtitle: "¡Mi Bautizo!",
    backgroundImage: "/images/bautizo/bautizo2.jpeg"
  },
  
  event: {
    celebrant: {
      name: "SANTIAGO ALEJANDRO MARTÍNEZ RODRÍGUEZ",
      age: "6 meses",
      birthDate: "15 de Octubre 2024"
    },
    parents: {
      father: "CARLOS MARTÍNEZ GARCÍA",
      mother: "MARÍA RODRÍGUEZ FLORES"
    },
    padrinos: {
      padrino: "ROBERTO GONZÁLEZ SILVA",
      madrina: "ANA ISABEL MARTÍNEZ LÓPEZ"
    },
    ceremony: {
      time: "12:00 hrs.",
      venue: "Parroquia San José",
      address: "Calle Hidalgo 123, Centro, 64000 Monterrey, N.L.",
      type: "Misa de Bautizo"
    },
    celebration: {
      time: "14:00 hrs.",
      venue: "Salón Los Ángeles",
      address: "Av. Principal 456, Valle Alto, 64989 Monterrey, N.L.",
      type: "Comida de Celebración"
    },
    dressCode: "Formal",
    restrictions: "Niños bienvenidos"
  },

  countdown: {
    targetDate: "March 15, 2025 12:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente solicitamos confirmar su asistencia",
    subtitle: "Esperamos que puedan acompañarnos en este día tan especial para nuestra familia.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Su presencia es nuestro mejor regalo, pero si desean obsequiarle algo a Santiago, pueden considerar las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Carlos Martínez García"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: Bautizo Santiago Alejandro\nCódigo: 51234567"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Pueden entregarlo en la recepción"
      }
    ]
  },

  music: {
    title: "MÚSICA ESPECIAL",
    message: "Disfruta de la música que hemos seleccionado para este día tan especial",
    tracks: [
      {
        title: "Ave María",
        artist: "Schubert",
        duration: "3:45",
        file: "/audio/ave-maria.mp3"
      },
      {
        title: "Jesús de Nazareth",
        artist: "Villancico",
        duration: "2:30",
        file: "/audio/jesus-nazareth.mp3"
      },
      {
        title: "Noche de Paz",
        artist: "Tradicional",
        duration: "3:15",
        file: "/audio/noche-paz.mp3"
      }
    ],
    backgroundImage: "/images/bautizo/bautizo3.jpeg"
  },

  gallery: {
    title: "GALERÍA DE FOTOS",
    message: "Momentos especiales de Santiago y nuestra familia",
    categories: [
      {
        name: "Primeros Meses",
        images: [
          "/images/bautizo/bautizo1.jpeg",
          "/images/bautizo/bautizo2.jpeg",
          "/images/bautizo/bautizo3.jpeg",
          "/images/bautizo/bautizo4.jpeg"
        ]
      },
      {
        name: "Con la Familia",
        images: [
          "/images/bautizo/bautizo2.jpeg",
          "/images/bautizo/bautizo3.jpeg",
          "/images/bautizo/bautizo4.jpeg",
          "/images/bautizo/bautizo1.jpeg"
        ]
      },
      {
        name: "Momentos Especiales",
        images: [
          "/images/bautizo/bautizo3.jpeg",
          "/images/bautizo/bautizo4.jpeg",
          "/images/bautizo/bautizo1.jpeg",
          "/images/bautizo/bautizo2.jpeg"
        ]
      }
    ]
  },

  padrinos: {
    title: "NUESTROS PADRINOS",
    message: "Personas especiales que han sido como segundos padres para Santiago",
    padrinos: [
      {
        role: "Padrinos de Honor",
        names: ["ROBERTO GONZÁLEZ SILVA", "ANA ISABEL MARTÍNEZ LÓPEZ"],
        description: "Quienes han sido como segundos padres"
      },
      {
        role: "Padrinos del Vestido",
        names: ["LUIS FERNÁNDEZ GARCÍA", "CAROLINA RUIZ MARTÍNEZ"],
        description: "Por hacer realidad mi vestido soñado"
      },
      {
        role: "Padrinos de la Vela",
        names: ["MIGUEL ÁNGEL LÓPEZ", "SUSANA HERNÁNDEZ"],
        description: "Por iluminar mi camino en la fe"
      },
      {
        role: "Padrinos de la Música",
        names: ["JOSÉ CARLOS VARGAS", "MARÍA ELENA SOTO"],
        description: "Por llenar de melodía mi celebración"
      },
      {
        role: "Padrinos de las Flores",
        names: ["ANTONIO RODRÍGUEZ", "PATRICIA MORALES"],
        description: "Por decorar este día especial"
      },
      {
        role: "Padrinos del Álbum",
        names: ["FERNANDO GUTIÉRREZ", "ROSA MARÍA DÍAZ"],
        description: "Por guardar mis recuerdos más preciados"
      }
    ]
  },

  invitation: {
    title: "INVITACIÓN ESPECIAL",
    message: "Con gran alegría y bendición de Dios, tenemos el honor de invitarles al bautizo de nuestro pequeño Santiago Alejandro",
    details: [
      "Será un día lleno de amor, fe y alegría",
      "Compartiremos la gracia de Dios en familia",
      "Celebraremos la vida y el futuro de nuestro bebé"
    ],
    closing: "Esperamos contar con su presencia en este momento tan significativo para nuestra familia."
  },

  thankYou: {
    title: "AGRADECIMIENTOS",
    message: "Queremos expresar nuestro más sincero agradecimiento a todos los que han sido parte de este hermoso momento en la vida de Santiago",
    sections: [
      {
        title: "A Nuestra Familia",
        message: "Por su amor incondicional y apoyo constante"
      },
      {
        title: "A Nuestros Padrinos",
        message: "Por aceptar esta responsabilidad tan importante"
      },
      {
        title: "A Nuestros Amigos",
        message: "Por compartir nuestra alegría y felicidad"
      },
      {
        title: "A Dios",
        message: "Por bendecirnos con este hermoso regalo"
      }
    ]
  },

  premium: {
    color: "from-purple-600 to-pink-600"
  },

  demo: {
    badge: "🌟 DEMO - Paquete Premium ($499)",
    description: "Esta es una demostración del paquete premium para bautizos",
    features: [
      "Todo del Básico",
      "Música personalizada",
      "Galería de fotos",
      "Lista de padrinos",
      "Invitación completa",
      "Agradecimientos especiales"
    ],
    cta: {
      title: "¿Te gusta el paquete Premium?",
      subtitle: "Incluye características exclusivas para un bautizo inolvidable",
      buttonText: "Contratar Paquete Premium - $499",
      link: "/#pricing"
    }
  }
}

export type PremiumDemoData = typeof premiumDemoData
