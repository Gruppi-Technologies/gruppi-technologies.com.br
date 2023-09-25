import { FC } from 'react';

import { FaqCard } from './components/faq-card';
import { FAQ, SECTION_TITLE } from './constants';
import { Container, Content, Title } from './styles';

export const FAQSection: FC = () => (
  <Container>
    <Content>
      <Title>{SECTION_TITLE}</Title>
      {FAQ.map((faq) => (
        <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </Content>
  </Container>
);
