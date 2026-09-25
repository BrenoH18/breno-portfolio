import { serviceGroups } from '../../data/services';
import './Services.css';

export function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <p className="eyebrow">Serviços</p>
        <h2 className="section-heading">O que eu posso resolver para você</h2>
        <p className="section-lede">
          Serviços que já pratico no dia a dia, separados por área de atuação.
        </p>

        <div className="services__groups">
          {serviceGroups.map((group) => (
            <div key={group.id} className="services__group">
              <h3 className="services__group-title">{group.title}</h3>
              <ul className="services__list">
                {group.services.map((service) => (
                  <li key={service.id} className={`services__card services__card--${group.id}`}>
                    <h4 className="services__card-title">{service.title}</h4>
                    <p className="services__card-desc">{service.description}</p>
                    <p className="services__card-problem">{service.problemSolved}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
