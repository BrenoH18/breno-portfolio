import { siteConfig } from '../../data/siteConfig';
import './Hero.css';

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">{siteConfig.role}</p>
        <h1 className="hero__headline">{siteConfig.heroHeadline}</h1>
        <p className="hero__subline">{siteConfig.heroSubline}</p>

        <div className="hero__actions">
          <a href="#servicos" className="btn btn--primary">
            Conhecer meus serviços
          </a>
          <a href="#contato" className="btn btn--secondary">
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  );
}
