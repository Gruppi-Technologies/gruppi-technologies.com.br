import { BullhornIcon } from '@/components/icons/bullhorn-icon';
import { DesktopIcon } from '@/components/icons/desktop-icon';
import { ITConsultingIcon } from '@/components/icons/it-consulting-icon';
import { MaintanceIcon } from '@/components/icons/maintance-icon';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { SEOIcon } from '@/components/icons/seo-icon';

export const SECTION_TITLE = 'Serviços';

export const FIRST_DESCRIPTION =
  'Nossa missão é ajudar nossos clientes a alcançar seus objetivos de negócios por meio de tecnologia. Fazemos isso desenvolvendo soluções personalizadas que se adaptam às necessidades específicas de cada cliente.';
export const SECOND_DESCRIPTION =
  'Somos apaixonados por tecnologia e comprometidos em fornecer produtos e serviços de alta qualidade. Estamos sempre à procura de novos desafios e oportunidades de trabalhar com clientes inovadores.';

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Desenvolvimento de sites',
    description:
      'Crie um site abrangente para sua empresa e alcance públicos diversos, independentemente de sua localização. A presença online é a chave para alcançar todos os públicos.',
    icon: <DesktopIcon />,
  },
  {
    id: 'mobile-development',
    title: 'Desenvolvimento de aplicativos',
    description:
      'Crie aplicativos móveis inovadores e alcance um público global. A mobilidade proporciona acesso instantâneo aos seus serviços, onde quer que seus clientes estejam.',
    icon: <MobileIcon />,
  },

  {
    id: 'search-engine-optimization',
    title: 'Search Engine Optimization (SEO)',
    description:
      'Otimizamos seu site para motores de busca, aumentando sua visibilidade e direcionando tráfego qualificado. Apareça nos primeiros resultados de pesquisa.',
    icon: <SEOIcon />,
  },
  {
    id: 'it-consulting',
    title: 'Consultoria de TI',
    description:
      'Oferecemos consultoria de TI para otimizar seus processos de negócios e alcançar seus objetivos tecnológicos. Nós fornecemos insights estratégicos e soluções eficazes para impulsionar a sua organização.',
    icon: <ITConsultingIcon />,
  },
  {
    id: 'software-maintance',
    title: 'Manutenção de software',
    description:
      'Mantenha seu software atualizado para garantir que ele funcione com eficiência e confiabilidade, evitando interrupções e problemas dispendiosos. Conte conosco para simplificar sua jornada tecnológica.',
    icon: <MaintanceIcon />,
  },
  {
    id: 'digital-marketing',
    title: 'Marketing digital',
    description:
      'Potencialize sua presença online e alcance seu público-alvo com nossos serviços de marketing digital. Utilizamos estratégias eficazes, para impulsionar o crescimento do seu negócio no mundo digital. Conte conosco para destacar sua marca e alcançar resultados sólidos.',
    icon: <BullhornIcon />,
  },
];
