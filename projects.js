const projectsData = [
  {
    id: "standapp",
    title: "StandApp - Gestión Integral Multiplataforma",
    tech: ["Spring Boot 3", "Flutter", "Dart", "PostgreSQL", "Docker"],
    summary:
      "Plataforma de gestión con backend robusto y clientes multiplataforma.",
    description:
      "Aplicación de gestión integral desarrollada en equipo con cliente multiplataforma.",
    challenge:
      "El mayor desafío fue diseñar una API RESTful con Spring Boot 3 desde cero para mantener seguridad y consistencia de datos con clientes concurrentes en Android, iOS, Web y Desktop.",
    image:
      "https://res.cloudinary.com/djlpirwkr/image/upload/v1777710764/logop_9a07e5.webp",
    imageAlt: "Logotipo de StandApp.",
    link: "https://github.com/AndYaN07/StandApp.git",
    imagePlaceholder: false,
    placeholderNote: false,
  },
  {
    id: "corporate-mail-extractor",
    title: "Corporate Mail Data Extractor",
    tech: ["Node.js", "Microsoft Graph API", "IMAP", "REST API"],
    summary:
      "Extracción automática de códigos desde correos corporativos con formatos variables.",
    description:
      "Automatización para extraer códigos desde buzones compartidos de Outlook con formatos de correo variables.",
    challenge:
      "El mayor desafío fue migrar una primera versión basada en IMAP hacia Microsoft Graph API en entorno corporativo, procesando cuerpos no normalizados y sincronizando los identificadores con endpoints externos en tiempo real.",
    image:
      "https://res.cloudinary.com/djlpirwkr/image/upload/v1777763773/newrender_a392fd.png",
    imageAlt: "Imagen descriptiva del proyeto.",
    link: "https://github.com/AndYaN07/mailreader-aut-extract.git",
    imagePlaceholder: false,
    placeholderNote: false,
  },
  {
    id: "origin-api",
    title: "Origin API: El Punto de Partida",
    tech: ["Node.js", "REST API", "JSON"],
    summary:
      "API To-Do para practicar arquitectura backend y endpoints RESTful.",
    description:
      "API de tareas tipo To-Do para practicar arquitectura backend y comunicación cliente-servidor.",
    challenge:
      "El mayor desafío fue diseñar una estructura de endpoints consistente y mantener validaciones claras para evitar incoherencias en los datos al escalar funcionalidades.",
    image:
      "https://res.cloudinary.com/djlpirwkr/image/upload/w_800,f_auto,q_auto/v1763312265/originapi_lbbben.png",
    imageAlt: "Representación visual abstracta de una idea o origen de código.",
    link: "https://github.com/AndYaN07/Origin-api",
    imagePlaceholder: false,
  },
  {
    id: "sql-project",
    title: "SQL Project: Logística de Bases de Datos",
    tech: ["PostgreSQL", "SQL"],
    summary:
      "Optimización de consultas y estructura relacional sobre PostgreSQL.",
    description:
      "Proyecto orientado a exploración, manipulación y optimización de base de datos relacional.",
    challenge:
      "El mayor desafío fue optimizar consultas complejas sobre múltiples tablas, ajustando joins e índices para mejorar tiempos de respuesta sin comprometer consistencia.",
    image:
      "https://res.cloudinary.com/djlpirwkr/image/upload/w_800,f_auto,q_auto/v1763312404/1163px-Postgresql_elephant.svg_lo2eqi.png",
    imageAlt: "Logotipo de la base de datos PostgreSQL.",
    link: "https://github.com/AndYaN07/DataAnalyst/tree/main/SQL",
    imagePlaceholder: false,
  },
];
