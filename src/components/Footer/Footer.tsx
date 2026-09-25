import { siteConfig } from '../../data/siteConfig';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {siteConfig.name}
        </span>
        <span>{siteConfig.role}</span>
      </div>
    </footer>
  );
}
