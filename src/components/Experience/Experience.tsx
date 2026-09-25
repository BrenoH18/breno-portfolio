import { experience } from '../../data/experience';
import './Experience.css';

export function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <p className="eyebrow">Experiência</p>
        <h2 className="section-heading">Trajetória profissional</h2>
        <p className="section-lede">
          Experiência prática em ambientes reais de trabalho, com usuários e sistemas reais.
        </p>

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li key={item.id} className="experience__item">
              <div className="experience__meta">
                <span className="experience__period">{item.period}</span>
              </div>
              <div>
                <h3 className="experience__role">{item.role}</h3>
                <p className="experience__org">{item.organization}</p>
                <p className="experience__desc">{item.description}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="experience__highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
