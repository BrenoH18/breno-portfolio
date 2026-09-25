import { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import './Header.css';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#topo" className="header__brand">
          {siteConfig.name}
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Abrir menu</span>
          <span className="header__toggle-bar" />
        </button>

        <nav
          id="menu-principal"
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
