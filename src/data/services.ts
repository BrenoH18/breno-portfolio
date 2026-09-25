import type { ServiceGroup } from '../types';

// Lista de serviços. Adicionar um novo serviço = adicionar um objeto no array
// correspondente. Nenhum preço é exibido no MVP.

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'suporte-infraestrutura',
    title: 'Suporte e infraestrutura',
    services: [
      {
        id: 'suporte-presencial-remoto',
        title: 'Suporte técnico presencial e remoto',
        description: 'Atendimento para resolver problemas do dia a dia em computadores e sistemas.',
        problemSolved: 'Seu computador ou sistema parou de funcionar como deveria.',
      },
      {
        id: 'manutencao-computadores',
        title: 'Manutenção de computadores',
        description: 'Diagnóstico e correção de problemas de hardware e software.',
        problemSolved: 'Equipamento lento, travando ou com defeito.',
      },
      {
        id: 'formatacao-windows',
        title: 'Formatação, instalação e otimização do Windows',
        description: 'Reinstalação do sistema, configuração e ajustes de desempenho.',
        problemSolved: 'Sistema operacional lento, corrompido ou mal configurado.',
      },
      {
        id: 'backup-dados',
        title: 'Backup e restauração de dados',
        description: 'Organização e proteção de arquivos importantes.',
        problemSolved: 'Risco de perder arquivos importantes.',
      },
      {
        id: 'impressoras',
        title: 'Configuração de impressoras e impressoras em rede',
        description: 'Instalação e configuração de impressoras locais e em rede.',
        problemSolved: 'Impressora não instala, não conecta ou não compartilha na rede.',
      },
      {
        id: 'redes-wifi',
        title: 'Configuração e troubleshooting de redes e Wi-Fi',
        description: 'Configuração de rede local, Wi-Fi e compartilhamento de arquivos e pastas.',
        problemSolved: 'Rede instável, sem sinal, ou dispositivos que não se enxergam.',
      },
      {
        id: 'suporte-empresas',
        title: 'Configuração de computadores para empresas',
        description: 'Preparação de máquinas e ambientes de trabalho para uso corporativo.',
        problemSolved: 'Sua empresa precisa colocar computadores e usuários para funcionar rapidamente.',
      },
      {
        id: 'manutencao-preventiva',
        title: 'Manutenção preventiva e orientação tecnológica',
        description: 'Acompanhamento periódico para evitar problemas antes que aconteçam.',
        problemSolved: 'Sua empresa não tem alguém de confiança para cuidar da parte técnica.',
      },
    ],
  },
  {
    id: 'desenvolvimento-sistemas',
    title: 'Desenvolvimento e sistemas',
    services: [
      {
        id: 'implantacao-sistemas',
        title: 'Implantação e configuração de sistemas',
        description: 'Colocar sistemas para funcionar corretamente no ambiente do cliente.',
        problemSolved: 'Você tem um sistema, mas ele não está implantado ou configurado corretamente.',
      },
      {
        id: 'suporte-sistemas',
        title: 'Suporte a sistemas utilizados por empresas',
        description: 'Acompanhamento e resolução de problemas em sistemas já em uso.',
        problemSolved: 'Um sistema da empresa apresenta erros ou dúvidas de uso recorrentes.',
      },
      {
        id: 'automacoes-simples',
        title: 'Integrações e automações simples',
        description: 'Conectar ferramentas e automatizar tarefas repetitivas.',
        problemSolved: 'Processos manuais que tomam tempo e poderiam ser automatizados.',
      },
      {
        id: 'desenvolvimento-sob-demanda',
        title: 'Desenvolvimento de sistemas web sob demanda',
        description: 'Construção de sistemas web personalizados para necessidades específicas.',
        problemSolved: 'Você precisa de um sistema que ainda não existe ou não atende ao seu processo.',
      },
      {
        id: 'sites-paginas',
        title: 'Desenvolvimento de páginas e sites',
        description: 'Criação de sites institucionais, portfólios e páginas para negócios.',
        problemSolved: 'Sua empresa ou projeto ainda não tem presença online.',
      },
      {
        id: 'manutencao-evolucao',
        title: 'Manutenção e evolução de sistemas existentes',
        description: 'Correções, ajustes e novas funcionalidades em sistemas já em produção.',
        problemSolved: 'Um sistema existente precisa de melhorias, correções ou novas funções.',
      },
    ],
  },
];
