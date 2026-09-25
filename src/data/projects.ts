import type { Project } from '../types';

// Adicionar um novo projeto = adicionar um novo objeto neste array.
// Campos marcados como [PLACEHOLDER] devem ser preenchidos com informações reais
// antes de publicar — não foram inventados dados que você não informou.

export const projects: Project[] = [
  {
    id: 'catalogo-online',
    name: 'Catálogo Online', // TROCAR: nome real do projeto/produto
    description:
      'Sistema de catálogo online desenvolvido com tecnologias web modernas, permitindo a apresentação e organização de produtos de forma acessível para clientes.',
    problemSolved:
      'O cliente precisava de uma forma simples e acessível de apresentar seus produtos online, sem depender de soluções genéricas ou complexas demais.',
    technologies: ['React', 'Vite', 'TypeScript'],
    role: 'Desenvolvimento completo do sistema, do planejamento à entrega para o cliente.',
    status: 'Em evolução',
    demoUrl: 'https://sua-empresa-store.vercel.app/', // TROCAR: link de demonstração, se disponível para compartilhar
    githubUrl: undefined, // TROCAR: link do repositório, se for público
    imageUrl: 'images/catalogo-online.png', // TROCAR: caminho de um screenshot, ex: '/projetos/catalogo-online.png'
  },
  // TROCAR: espaço reservado para projetos futuros vindos do GitHub.
  // Basta seguir a mesma estrutura de objeto acima.
];
