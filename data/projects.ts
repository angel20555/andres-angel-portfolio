export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-commerce Automation",
    description:
      "Framework de automatización para validar los principales flujos de una plataforma de comercio electrónico.",
    category: "QA Automation",
    technologies: [
      "Selenium",
      "Java",
      "Serenity",
    ],
    image: "/images/projects/ecommerce-automation.png",
    github: "#",
    featured: true,
  },

  {
    title: "API Testing Framework",
    description:
      "Automatización de pruebas para validar endpoints REST, respuestas y diferentes escenarios de una API.",
    category: "API Testing",
    technologies: [
      "Karate",
      "REST API",
      "CI/CD",
    ],
    image: "/images/projects/api-testing.png",
    github: "#",
  },

  {
    title: "Task Manager",
    description:
      "Aplicación web para gestionar tareas, usuarios y estados de proyectos.",
    category: "Web Development",
    technologies: [
      "React",
      "C#",
      ".NET",
      "SQL Server",
    ],
    image: "/images/projects/task-manager.png",
    github: "#",
    demo: "#",
  },
];