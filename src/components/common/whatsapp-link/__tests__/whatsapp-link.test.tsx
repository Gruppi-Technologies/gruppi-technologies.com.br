import { render, screen } from '@testing-library/react';

import globalConfig from '@/config/global-config/global-config';

import { WHATSAPP_LINK_LABEL } from '../constants';
import { WhatsAppLink } from '../whatsapp-link';

describe('WhatsApp link', () => {
  it('should render correctly', () => {
    render(<WhatsAppLink />);

    const whatsappLink = screen.getByRole('link', { name: WHATSAPP_LINK_LABEL });
    expect(whatsappLink).toHaveAttribute('href', globalConfig.whatsappLink());
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
