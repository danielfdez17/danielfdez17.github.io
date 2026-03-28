import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre mi",
        contact: "Contacto"
      },
      hero: {
        badge: "Ingeniero de Software",
        greetingPrefix: "Hola, soy",
        subtitle: "Desarrollador Full Stack apasionado por la programacion.",
        cta: "Ver proyectos"
      },
      about: {
        title: "Sobre mi",
        body: "Desarrollador de software apasionado por el aprendizaje continuo. Actualmente estoy finalizando mi grado en Ingenieria de Software en la Universidad Complutense de Madrid. Me especializo en el desarrollo backend con Java y Spring Boot, aunque tambien tengo experiencia en frontend utilizando HTML, CSS y JavaScript."
      },
      projects: {
        title: "Proyectos",
        list: {
          tfg: {
            title: "Trabajo de Fin de Grado",
            description: "Desarrollo de una aplicacion similar a Booking con el objetivo de comparar dos paradigmas: SOA + ACID vs Microservicios + BASE. Ambos enfoques implementan transacciones distribuidas utilizando el protocolo Two-Phase Commit (2PC)."
          },
          adopta: {
            title: "Adopta un profe",
            description: "Aplicacion web para conectar alumnos con profesores particulares. El objetivo del proyecto es aprender y aplicar la metodologia Agile Scrum en un entorno de desarrollo real."
          },
          minishell: {
            title: "minishell",
            description: "Programa en C que simula el comportamiento de una shell. El proyecto requiere implementar los siguientes builtins: cd, echo, env, exit, export, pwd, unset, asi como la gestion de redirecciones y tuberias."
          },
          pipex: {
            title: "pipex",
            description: "Programa en C que simula el comportamiento de tuberias en la linea de comandos de Unix."
          },
          philosophers: {
            title: "philosophers",
            description: "Programa en C que resuelve el problema de los filosofos. Implementa la sincronizacion de hilos utilizando mutex para evitar condiciones de carrera y deadlocks."
          }
        }
      },
      contact: {
        title: "Contacto"
      },
      language: {
        switchLabel: "Idioma",
        english: "EN",
        spanish: "ES"
      },
      theme: {
        toggleAria: "Cambiar tema"
      },
      scrollTop: {
        ariaLabel: "Volver arriba"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About",
        contact: "Contact"
      },
      hero: {
        badge: "Software Engineer",
        greetingPrefix: "Hi, I'm",
        subtitle: "Full Stack Developer passionate about software engineering.",
        cta: "View projects"
      },
      about: {
        title: "About me",
        body: "Software developer passionate about continuous learning. I am currently finishing my degree in Software Engineering at the Complutense University of Madrid. I specialize in backend development with Java and Spring Boot, and I also have frontend experience with HTML, CSS, and JavaScript."
      },
      projects: {
        title: "Projects",
        list: {
          tfg: {
            title: "Final Degree Project",
            description: "Development of a Booking-like application to compare two paradigms: SOA + ACID vs Microservices + BASE. Both approaches implement distributed transactions using the Two-Phase Commit (2PC) protocol."
          },
          adopta: {
            title: "Adopta un profe",
            description: "Web application that connects students with private tutors. The main goal is to learn and apply Agile Scrum methodology in a real development environment."
          },
          minishell: {
            title: "minishell",
            description: "C program that simulates shell behavior. The project requires implementing builtins such as cd, echo, env, exit, export, pwd, and unset, plus redirection and piping support."
          },
          pipex: {
            title: "pipex",
            description: "C program that simulates Unix command-line piping behavior."
          },
          philosophers: {
            title: "philosophers",
            description: "C program that solves the dining philosophers problem. It implements thread synchronization with mutexes to avoid race conditions and deadlocks."
          }
        }
      },
      contact: {
        title: "Contact"
      },
      language: {
        switchLabel: "Language",
        english: "EN",
        spanish: "ES"
      },
      theme: {
        toggleAria: "Toggle theme"
      },
      scrollTop: {
        ariaLabel: "Back to top"
      }
    }
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;