import type { ContactInfo } from '../types';

// TROCAR: preencha com seus dados reais de contato antes de publicar.
export const contactInfo: ContactInfo = {
  whatsappNumber: '5562984760949', // formato: 55 + DDD + número, sem espaços ou símbolos
  whatsappDisplay: '(62) 98476-0949',
  email: 'bhgames13@gmail.com',
  githubUrl: 'https://github.com/BrenoH18',
  linkedinUrl: 'https://www.linkedin.com/in/brenoh18', // TROCAR: adicione seu link do LinkedIn, se tiver
};

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encoded}`;
}
