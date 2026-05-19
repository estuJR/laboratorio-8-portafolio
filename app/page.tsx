const proyectos = [
  {
    nombre: "Laboratorio 1 - Fundamentos Web",
    descripcion:
      "Laboratorio desarrollado para practicar la estructura básica de una aplicación web, uso de componentes, estilos y organización del contenido.",
    tecnologias: ["Next.js", "React", "TypeScript", "CSS"],
    imagen: "/proyecto1.png",
    repo: "https://github.com/tu-usuario/tu-repo-lab1",
    demo: "#",
  },
  {
    nombre: "Laboratorio 2 - Aplicación Web",
    descripcion:
      "Proyecto enfocado en construir una interfaz web ordenada, aplicando navegación, diseño visual y buenas prácticas de desarrollo.",
    tecnologias: ["React", "JavaScript", "HTML", "CSS"],
    imagen: "/proyecto2.png",
    repo: "https://github.com/tu-usuario/tu-repo-lab2",
    demo: "#",
  },
  {
    nombre: "Laboratorio 3 - Backend y API",
    descripcion:
      "Laboratorio orientado al desarrollo de servicios backend, manejo de rutas, lógica del servidor y conexión con datos.",
    tecnologias: ["Node.js", "Express", "PostgreSQL"],
    imagen: "/proyecto3.png",
    repo: "https://github.com/tu-usuario/tu-repo-lab3",
    demo: "#",
  },
  {
    nombre: "Proyecto 1 del Curso",
    descripcion:
      "Primer proyecto principal del curso, desarrollado en equipo para aplicar conceptos de frontend, backend, repositorios y despliegue.",
    tecnologias: ["React", "Backend", "GitHub", "Vercel"],
    imagen: "/proyecto4.png",
    repo: "https://github.com/tu-usuario/tu-repo-proyecto1",
    demo: "#",
  },
  {
    nombre: "Proyecto 2 del Curso",
    descripcion:
      "Segundo proyecto principal del curso, integrando conocimientos de desarrollo web, base de datos, consumo de API y despliegue.",
    tecnologias: ["Next.js", "API", "Base de Datos", "Vercel"],
    imagen: "/proyecto5.png",
    repo: "https://github.com/tu-usuario/tu-repo-proyecto2",
    demo: "#",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <h2>Javier Alvizures</h2>

        <div>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div className="heroContent">
          <p className="tag">Portafolio Web Personal</p>

          <h1>Hola, soy Javier Alvizures</h1>

          <p className="descripcion">
            Soy estudiante de Ingeniería en Sistemas y este portafolio reúne
            algunos de los laboratorios y proyectos que he trabajado durante el
            curso de Sistemas y Tecnologías Web.
          </p>

          <div className="tecnologias">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>GitHub</span>
          </div>

          <div className="botones">
            <a href="#proyectos" className="btnPrincipal">
              Ver proyectos
            </a>

            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              className="btnSecundario"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section">
        <p className="tag">Sobre mí</p>

        <h2>Quién soy</h2>

        <p>
          Soy estudiante de Ingeniería en Sistemas y me interesa el desarrollo
          web porque permite crear soluciones visuales, funcionales y accesibles.
          Durante este curso he aprendido a organizar mejor mis proyectos,
          trabajar con repositorios, crear interfaces, conectar partes del
          frontend y backend, y preparar aplicaciones para publicarlas en línea.
        </p>

        <p>
          Me gustaría seguir aprendiendo sobre desarrollo frontend, backend,
          bases de datos, autenticación, despliegue y buenas prácticas para crear
          aplicaciones más completas y profesionales.
        </p>

        <div className="cardsInfo">
          <div>
            <h3>Intereses profesionales</h3>
            <p>Desarrollo web, diseño de interfaces, backend y bases de datos.</p>
          </div>

          <div>
            <h3>Tecnologías favoritas</h3>
            <p>React, Next.js, TypeScript, JavaScript, PostgreSQL y GitHub.</p>
          </div>

          <div>
            <h3>Áreas por aprender</h3>
            <p>Testing, autenticación, arquitectura web y despliegue profesional.</p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="section proyectosSection">
        <p className="tag">Trabajos del curso</p>

        <h2>Proyectos</h2>

        <p>
          Aquí presento una recopilación de laboratorios y proyectos realizados
          durante el curso. Cada uno representa una parte importante de mi
          aprendizaje en desarrollo web.
        </p>

        <div className="gridProyectos">
          {proyectos.map((proyecto, index) => (
            <article className="cardProyecto" key={index}>
              <div className="imagenProyecto">
                <img src={proyecto.imagen} alt={proyecto.nombre} />
              </div>

              <div className="contenidoProyecto">
                <h3>{proyecto.nombre}</h3>

                <p>{proyecto.descripcion}</p>

                <div className="techList">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="linksProyecto">
                  <a href={proyecto.repo} target="_blank">
                    Repositorio
                  </a>

                  <a href={proyecto.demo} target="_blank">
                    Sitio desplegado
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contacto">
        <p className="tag">Contacto</p>

        <h2>Hablemos</h2>

        <p>
          Puedes contactarme por correo o revisar mis repositorios en GitHub.
        </p>

        <div className="contactGrid">
          <div className="contactCard">
            <h3>Correo</h3>
            <p>tu-correo@correo.com</p>
          </div>

          <div className="contactCard">
            <h3>GitHub</h3>
            <a href="https://github.com/tu-usuario" target="_blank">
              github.com/tu-usuario
            </a>
          </div>

          <div className="contactCard">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank">
              linkedin.com/in/tu-usuario
            </a>
          </div>
        </div>

        <form className="formulario">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="button">Enviar mensaje</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Javier Alvizures. Portafolio desarrollado con Next.js.</p>
      </footer>
    </main>
  );
}