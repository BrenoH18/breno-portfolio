import { siteConfig } from '../../data/siteConfig';
import { contactInfo, buildWhatsappUrl } from '../../data/contact';
import './Contact.css';

export function Contact() {
  return (
    <section id="contato" className="section section--dark contact">
      <div className="container">
        <p className="eyebrow">Contato</p>
        <h2 className="section-heading">{siteConfig.contactCtaHeadline}</h2>
        <p className="section-lede">{siteConfig.contactCtaSubline}</p>

        <div className="contact__actions">
          <a
            href={buildWhatsappUrl('Olá! Vi seu portfólio e gostaria de falar sobre um projeto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Chamar no WhatsApp
          </a>
          <a href={`mailto:${contactInfo.email}`} className="btn btn--secondary">
            Enviar e-mail
          </a>
        </div>

        <ul className="contact__links">
          <li>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
            <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          {contactInfo.linkedinUrl && (
            <li>
              <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
