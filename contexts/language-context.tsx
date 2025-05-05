"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    es: "Inicio",
  },
  "nav.about": {
    en: "About",
    es: "Sobre mí",
  },
  "nav.education": {
    en: "Education",
    es: "Educación",
  },
  "nav.experience": {
    en: "Experience",
    es: "Experiencia",
  },
  "nav.projects": {
    en: "Projects",
    es: "Proyectos",
  },
  "nav.skills": {
    en: "Skills",
    es: "Habilidades",
  },
  "nav.contact": {
    en: "Contact",
    es: "Contacto",
  },

  // Hero Section
  "hero.title": {
    en: "Full Stack Developer",
    es: "Desarrollador Full Stack",
  },
  "hero.subtitle": {
    en: "with 4 years of experience delivering custom web solutions",
    es: "con 4 años de experiencia desarrollando soluciones web personalizadas",
  },
  "hero.viewProjects": {
    en: "View Projects",
    es: "Ver Proyectos",
  },
  "hero.contactMe": {
    en: "Contact Me",
    es: "Contáctame",
  },

  // About Section
  "about.title": {
    en: "About Me",
    es: "Sobre Mí",
  },
  "about.p1": {
    en: "Full Stack Developer with 4 years of experience delivering custom web solutions for various clients. Proficient in front-end and back-end web development, along with mobile app development for Android.",
    es: "Desarrollador Full Stack con 4 años de experiencia entregando soluciones web personalizadas para diversos clientes. Competente en desarrollo web front-end y back-end, junto con desarrollo de aplicaciones móviles para Android.",
  },
  "about.p2": {
    en: "Experienced in managing full project lifecycles, from concept to deployment, and optimizing business processes through custom software solutions.",
    es: "Experimentado en la gestión de ciclos de vida completos de proyectos, desde el concepto hasta la implementación, y en la optimización de procesos comerciales a través de soluciones de software personalizadas.",
  },
  "about.languages": {
    en: "Languages:",
    es: "Idiomas:",
  },
  "about.languagesList": {
    en: "English (Proficient), Spanish (Native)",
    es: "Inglés (Competente), Español (Nativo)",
  },

  // Education Section
  "education.title": {
    en: "Education",
    es: "Educación",
  },
  "education.subtitle": {
    en: "Academic background and qualifications.",
    es: "Formación académica y calificaciones.",
  },
  "education.degree1": {
    en: "B.S in Computer Science",
    es: "Licenciatura en Ciencias de la Computación",
  },
  "education.degree2": {
    en: "University Analyst Programmer",
    es: "Analista Programador Universitario",
  },
  "education.institution": {
    en: "Universidad Nacional de La Plata",
    es: "Universidad Nacional de La Plata",
  },
  "education.location": {
    en: "La Plata, Argentina",
    es: "La Plata, Argentina",
  },
  "education.gpa": {
    en: "GPA",
    es: "Promedio",
  },

  // Experience Section
  "experience.title": {
    en: "Experience",
    es: "Experiencia",
  },
  "experience.subtitle": {
    en: "Professional experience and key achievements.",
    es: "Experiencia profesional y logros clave.",
  },
  "experience.job1.title": {
    en: "Full Stack Web Developer",
    es: "Desarrollador Web Full Stack",
  },
  "experience.job1.company": {
    en: "Freelancer",
    es: "Freelancer",
  },
  "experience.job1.description": {
    en: "Freelance full-stack developer delivering custom web solutions, ranging from business management systems to e-commerce platforms, ensuring successful delivery and optimization of business processes.",
    es: "Desarrollador full-stack freelance que entrega soluciones web personalizadas, desde sistemas de gestión empresarial hasta plataformas de comercio electrónico, asegurando una entrega exitosa y la optimización de procesos comerciales.",
  },
  "experience.job1.achievement1": {
    en: 'Collaborated on the development of a comprehensive business management system for "Impacto", including invoicing, inventory, and workflow optimization, managing operations for over 1,000 clients.',
    es: 'Colaboré en el desarrollo de un sistema integral de gestión empresarial para "Impacto", que incluye facturación, inventario y optimización del flujo de trabajo, gestionando operaciones para más de 1,000 clientes.',
  },
  "experience.job1.achievement2": {
    en: 'Developed the official website for "El Mensual", showcasing 40 unique products, improving user experience, and increasing product visibility by 30%.',
    es: 'Desarrollé el sitio web oficial de "El Mensual", mostrando 40 productos únicos, mejorando la experiencia del usuario y aumentando la visibilidad del producto en un 30%.',
  },
  "experience.job1.achievement3": {
    en: "Automated transaction management for financial tracking, saving clients over 100 hours monthly and ensuring precise reconciliation of bank balances, taxes, and credits.",
    es: "Automaticé la gestión de transacciones para el seguimiento financiero, ahorrando a los clientes más de 100 horas mensuales y asegurando la conciliación precisa de saldos bancarios, impuestos y créditos.",
  },
  "experience.job1.achievement4": {
    en: "Implemented a business management platform for my own entrepreneurship, streamlining inventory, sales, and invoicing processes, resulting in a 70% administrative efficiency improvement.",
    es: "Implementé una plataforma de gestión empresarial para mi propio emprendimiento, agilizando los procesos de inventario, ventas y facturación, lo que resultó en una mejora del 70% en la eficiencia administrativa.",
  },
  "experience.job2.title": {
    en: "University Projects",
    es: "Proyectos Universitarios",
  },
  "experience.job2.company": {
    en: "Universidad Nacional de La Plata",
    es: "Universidad Nacional de La Plata",
  },
  "experience.job2.description": {
    en: "Facultad de Informática in the Universidad Nacional de La Plata",
    es: "Facultad de Informática en la Universidad Nacional de La Plata",
  },
  "experience.job2.achievement1": {
    en: "Constructed a flood alert app for La Plata, simulating 10 real-time emergency scenarios and improving system response times.",
    es: "Construí una aplicación de alerta de inundaciones para La Plata, simulando 10 escenarios de emergencia en tiempo real y mejorando los tiempos de respuesta del sistema.",
  },
  "experience.job2.achievement2": {
    en: "Built a platform to schedule and manage 20 simulated sports events, enhancing skills in data structures and responsive UI design.",
    es: "Construí una plataforma para programar y gestionar 20 eventos deportivos simulados, mejorando las habilidades en estructuras de datos y diseño de UI responsivo.",
  },
  "experience.job2.achievement3": {
    en: 'Created "La Justa" app to manage the sale and inventory of vegetable bags for an agricultural company, handling 15 inventory items and transactions.',
    es: 'Creé la aplicación "La Justa" para gestionar la venta e inventario de bolsas de verduras para una empresa agrícola, manejando 15 artículos de inventario y transacciones.',
  },

  // Projects Section
  "projects.title": {
    en: "Projects",
    es: "Proyectos",
  },
  "projects.subtitle": {
    en: "A collection of my recent work and ongoing projects.",
    es: "Una colección de mi trabajo reciente y proyectos en curso.",
  },
  "projects.viewProject": {
    en: "View Project",
    es: "Ver Proyecto",
  },
  "projects.project1.title": {
    en: "Anotaciones Bancarias",
    es: "Anotaciones Bancarias",
  },
  "projects.project1.description": {
    en: "A demo for El Mensual featuring banking annotations and financial data visualization.",
    es: "Una demo para El Mensual con anotaciones bancarias y visualización de datos financieros.",
  },
  "projects.project2.title": {
    en: "El Mensual",
    es: "El Mensual",
  },
  "projects.project2.description": {
    en: "Official website for El Mensual, showcasing 40+ unique products with improved user experience.",
    es: "Sitio web oficial de El Mensual, mostrando más de 40 productos únicos con una experiencia de usuario mejorada.",
  },
  "projects.project3.title": {
    en: "Fitness & Health App",
    es: "Aplicación de Fitness y Salud",
  },
  "projects.project3.description": {
    en: "Mobile application to help users track their fitness routines and health goals.",
    es: "Aplicación móvil para ayudar a los usuarios a seguir sus rutinas de fitness y objetivos de salud.",
  },
  "projects.project4.title": {
    en: "Impacto Business Management",
    es: "Gestión Empresarial Impacto",
  },
  "projects.project4.description": {
    en: "Comprehensive business management system including invoicing, inventory, and workflow optimization.",
    es: "Sistema integral de gestión empresarial que incluye facturación, inventario y optimización del flujo de trabajo.",
  },
  "projects.entrepreneurship.title": {
    en: "Clothing Store",
    es: "Tienda de Ropa",
  },
  "projects.entrepreneurship.description": {
    en: "My entrepreneurship project selling clothes through Instagram.",
    es: "Mi proyecto de emprendimiento vendiendo ropa a través de Instagram.",
  },
  "projects.entrepreneurship.viewStore": {
    en: "View Store",
    es: "Ver Tienda",
  },

  // Skills Section
  "skills.title": {
    en: "Skills & Strengths",
    es: "Habilidades y Fortalezas",
  },
  "skills.subtitle": {
    en: "Technical expertise and professional strengths.",
    es: "Experiencia técnica y fortalezas profesionales.",
  },
  "skills.category1": {
    en: "Client-Side",
    es: "Cliente",
  },
  "skills.category2": {
    en: "Server-Side",
    es: "Servidor",
  },
  "skills.category3": {
    en: "Development & Operations",
    es: "Desarrollo y Operaciones",
  },
  "skills.category4": {
    en: "Mobile Development",
    es: "Desarrollo Móvil",
  },
  "skills.strengths": {
    en: "Key Strengths",
    es: "Fortalezas Clave",
  },
  "skills.strength1.title": {
    en: "Agile Methodologies",
    es: "Metodologías Ágiles",
  },
  "skills.strength1.description": {
    en: "Proficient in Scrum and Agile frameworks, improving project timelines by 50% and ensuring timely, cost-effective delivery.",
    es: "Competente en marcos de trabajo Scrum y Ágiles, mejorando los plazos de los proyectos en un 50% y asegurando una entrega oportuna y rentable.",
  },
  "skills.strength2.title": {
    en: "Strategic Planning",
    es: "Planificación Estratégica",
  },
  "skills.strength2.description": {
    en: 'Led digital strategies, including marketing campaigns that increased sales and boosted brand visibility 15x for "El Mensual."',
    es: 'Dirigí estrategias digitales, incluidas campañas de marketing que aumentaron las ventas y potenciaron la visibilidad de la marca 15 veces para "El Mensual".',
  },
  "skills.strength3.title": {
    en: "Problem Solving",
    es: "Resolución de Problemas",
  },
  "skills.strength3.description": {
    en: "Identified and resolved complex technical issues, reducing project downtime by 15%.",
    es: "Identifiqué y resolví problemas técnicos complejos, reduciendo el tiempo de inactividad del proyecto en un 15%.",
  },

  // Contact Section
  "contact.title": {
    en: "Get in Touch",
    es: "Ponte en Contacto",
  },
  "contact.subtitle": {
    en: "Interested in working together? Reach out through any of these channels.",
    es: "¿Interesado en trabajar juntos? Comunícate a través de cualquiera de estos canales.",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },

  // Language Switcher
  "language.en": {
    en: "English",
    es: "Inglés",
  },
  "language.es": {
    en: "Spanish",
    es: "Español",
  },
  "language.switch": {
    en: "Switch language",
    es: "Cambiar idioma",
  },
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  // Detect browser language on first render
  useEffect(() => {
    const detectBrowserLanguage = () => {
      try {
        // Try to get saved language first
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
          return savedLanguage
        }

        // Otherwise detect from browser
        const browserLang = navigator.language || (navigator as any).userLanguage
        if (browserLang) {
          // Check if the browser language starts with 'es'
          if (browserLang.toLowerCase().startsWith("es")) {
            return "es"
          }
        }

        // Default to English
        return "en"
      } catch (error) {
        // If there's any error (e.g., localStorage not available), default to English
        return "en"
      }
    }

    if (!isInitialized) {
      const detectedLanguage = detectBrowserLanguage()
      setLanguageState(detectedLanguage)
      setIsInitialized(true)
    }
  }, [isInitialized])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    try {
      localStorage.setItem("language", newLanguage)
    } catch (error) {
      // Handle localStorage errors silently
      console.error("Could not save language preference:", error)
    }
  }

  const t = (key: string): string => {
    return translations[key as keyof typeof translations]?.[language] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
