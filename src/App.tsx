import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { HowICanHelp } from './components/HowICanHelp/HowICanHelp';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

// Ordem das seções do MVP, conforme definido no briefing:
// Home (Hero) > Serviços > Projetos > Experiência > Sobre > Contato.
// "Como posso ajudar" e "Como funciona" reforçam a jornada entre Serviços e Projetos.
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowICanHelp />
        <HowItWorks />
        <Projects />
        <Experience />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
