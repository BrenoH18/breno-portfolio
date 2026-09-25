import { projects } from '../../data/projects';
import './Projects.css';

export function Projects() {
  return (
    <section id="projetos" className="section section--alt projects">
      <div className="container">
        <p className="eyebrow">Projetos</p>
        <h2 className="section-heading">Projetos que já desenvolvi</h2>
        <p className="section-lede">
          Um case real, comercializado para um cliente, e uma estrutura preparada para novos
          projetos no futuro.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`Captura de tela do projeto ${project.name}`}
                  className="project-card__image"
                />
              ) : (
                <div className="project-card__image project-card__image--placeholder" aria-hidden="true">
                  {/* TROCAR: adicionar screenshot em src/data/projects.ts (imageUrl) */}
                  Screenshot em breve
                </div>
              )}

              <div className="project-card__body">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.name}</h3>
                  <span className="project-card__status">{project.status}</span>
                </div>

                <p className="project-card__desc">{project.description}</p>
                <p className="project-card__problem">
                  <strong>Problema resolvido:</strong> {project.problemSolved}
                </p>
                <p className="project-card__role">
                  <strong>Meu papel:</strong> {project.role}
                </p>

                <ul className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-card__links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                      Ver demonstração
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                      Ver no GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
