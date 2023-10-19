import { FC } from 'react';

import { Button } from '@/components/common/button/button';
import { MODALS } from '@/components/common/modals/constants';
import { useModal } from '@/hooks/use-modal/use-modal';

import { STANDARD_BUTTON_TITLE } from '../../constants';
import { ServiceComparison } from './components/service-comparison/service-comparision';
import { NEGATIVE_COMPARISON_ITEMS, POSITIVE_COMPARISON_ITEMS, SECTION_TITLE } from './constants';
import { ButtonWrapper, Container, Content, ServicesComparisonWrapper, Title } from './styles';

export const MakeRightChoiceSection: FC = () => {
  const { openModal } = useModal();

  return (
    <Container>
      <Content>
        <Title>{SECTION_TITLE}</Title>
        <ServicesComparisonWrapper>
          <ServiceComparison variant="negative" title="Serviços amadores" item={NEGATIVE_COMPARISON_ITEMS} />
          <ServiceComparison variant="positive" title="Nossos serviços" item={POSITIVE_COMPARISON_ITEMS} />
        </ServicesComparisonWrapper>
        <ButtonWrapper>
          <Button title={STANDARD_BUTTON_TITLE} onClick={() => openModal(MODALS.CONTACT_FORM)} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};
