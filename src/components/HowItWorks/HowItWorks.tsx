import { processSteps } from '../../data/process';
import './HowItWorks.css';

export function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <p className="eyebrow">Como funciona</p>
        <h2 className="section-heading">Do primeiro contato até a entrega</h2>

        <ol className="how-it-works__list">
          {processSteps.map((step, index) => (
            <li key={step.id} className="how-it-works__item">
              <span className="how-it-works__number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="how-it-works__title">{step.title}</h3>
                <p className="how-it-works__desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
