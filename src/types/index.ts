// Tipos compartilhados para o conteúdo do site.
// Manter os dados tipados ajuda a evitar erros ao editar os arquivos em src/data.

export interface Service {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  services: Service[];
}

export interface Problem {
  id: string;
  question: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export type ProjectStatus = 'Em produção' | 'Em evolução' | 'Concluído' | 'Em desenvolvimento';

export interface Project {
  id: string;
  name: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  role: string;
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface TechnologyGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ContactInfo {
  whatsappNumber: string; // formato internacional, ex: "5562999999999"
  whatsappDisplay: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string;
}
