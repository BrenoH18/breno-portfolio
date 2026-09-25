import { problems } from '../../data/problems';
import { buildWhatsappUrl } from '../../data/contact';
import './HowICanHelp.css';

export function HowICanHelp() {
  return (
    <section className="section section--dark how-i-can-help">
      <div className="container">
        <p className="eyebrow">Como posso ajudar</p>
        <h2 className="section-heading">Se algo disso soa familiar, eu posso ajudar</h2>

        <ul className="how-i-can-help__list">
          {problems.map((problem) => (
            <li key={problem.id}>
              <a
                href={buildWhatsappUrl(`Olá! ${problem.question} Pode me ajudar?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="how-i-can-help__item"
              >
                {problem.question}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
