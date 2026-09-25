import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    title: 'Você entra em contato',
    description: 'Pelo WhatsApp ou e-mail, contando o que está acontecendo ou o que você precisa.',
  },
  {
    id: 'step-2',
    title: 'Entendo o problema ou necessidade',
    description: 'Faço as perguntas certas para entender o cenário antes de propor qualquer solução.',
  },
  {
    id: 'step-3',
    title: 'Avalio a solução',
    description: 'Analiso as opções disponíveis e o que faz mais sentido para o seu caso.',
  },
  {
    id: 'step-4',
    title: 'Apresento a proposta',
    description: 'Você recebe um retorno claro sobre o que será feito, antes de qualquer execução.',
  },
  {
    id: 'step-5',
    title: 'Executo o serviço',
    description: 'Coloco a solução em prática, seja um atendimento pontual ou um projeto mais longo.',
  },
  {
    id: 'step-6',
    title: 'Entrego e acompanho',
    description: 'Confirmo que tudo está funcionando e permaneço disponível quando necessário.',
  },
];
