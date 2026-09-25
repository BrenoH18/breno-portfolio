import { technologyGroups } from '../../data/technologies';
import './Technologies.css';

export function Technologies() {
  return (
    <section className="section technologies">
      <div className="container">
        <p className="eyebrow">Tecnologias</p>
        <h2 className="section-heading">Com o que eu trabalho</h2>

        <div className="technologies__groups">
          {technologyGroups.map((group) => (
            <div key={group.id} className="technologies__group">
              <h3 className="technologies__group-title">{group.title}</h3>
              <ul className="technologies__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
