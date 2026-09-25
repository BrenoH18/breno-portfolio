import { siteConfig } from '../../data/siteConfig';
import './About.css';

export function About() {
  const paragraphs = siteConfig.aboutText.split('\n\n');

  return (
    <section id="sobre" className="section section--alt about">
      <div className="container about__inner">
        <div className="about__photo-slot" aria-hidden={!siteConfig.photoUrl}>
          {siteConfig.photoUrl ? (
            <img src={siteConfig.photoUrl} alt={siteConfig.name} />
          ) : (
            <span className="about__photo-placeholder">
              {/* TROCAR: adicionar foto em src/data/siteConfig.ts (photoUrl) */}
              Foto
            </span>
          )}
        </div>

        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="section-heading">Quem está do outro lado da tela</h2>

          <div className="about__text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
