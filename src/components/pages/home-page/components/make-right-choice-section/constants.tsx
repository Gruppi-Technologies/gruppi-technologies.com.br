import { BriefcaseIcon } from '@/components/icons/briefcase-icon';
import { CalendarIcon } from '@/components/icons/calendar-icon';
import { LockIcon } from '@/components/icons/lock';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { SettingsIcon } from '@/components/icons/settings-icon';
import { SlashIcon } from '@/components/icons/slash-icon';
import { UnlockIcon } from '@/components/icons/unlock-icon';
import { XCircleIcon } from '@/components/icons/x-circle-icon';

export const SECTION_TITLE = 'Faça a escolha certa';

export const POSITIVE_COMPARISON_ITEMS = [
  {
    id: 'positive-1',
    text: 'Trasmitem qualidade e confiança',
    icon: <LockIcon />,
  },
  {
    id: 'positive-2',
    text: 'Soluções de acordo com seu negócio',
    icon: <BriefcaseIcon />,
  },
  {
    id: 'positive-3',
    text: 'Compromisso com a entrega',
    icon: <CalendarIcon />,
  },
  {
    id: 'positive-4',
    text: 'Sites funcionais em qualquer dispositivo',
    icon: <MobileIcon />,
  },
];

export const NEGATIVE_COMPARISON_ITEMS = [
  {
    id: 'negative-1',
    text: 'Falta de confiança e qualidade duvidosa',
    icon: <UnlockIcon />,
  },
  {
    id: 'negative-2',
    text: 'Soluções totalmente genéricas',
    icon: <SlashIcon />,
  },
  {
    id: 'negative-3',
    text: 'Falta de compromisso com prazos',
    icon: <XCircleIcon />,
  },
  {
    id: 'negative-4',
    text: 'Sites com funcionalidade limitada',
    icon: <SettingsIcon />,
  },
];
