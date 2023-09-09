import { FC } from 'react';

import { Button } from '@/components/common/button/button';

import { HERO_SUBTITLE, HERO_TITLE_1ST_SENTENCE, HERO_TITLE_2ND_SENTENCE } from './constants';
import { HeroImage } from './hero-image/hero-image';
import {
  ButtonWrapper,
  Container,
  Content,
  HeroDescription,
  HeroHighlited,
  HeroImageWrapper,
  HeroSubtitle,
  HeroSubtitleHighlited,
  HeroTitle,
} from './styles';

export const HeroSection: FC = () => (
  <Container>
    <Content>
      <HeroDescription>
        <HeroTitle>
          {HERO_TITLE_1ST_SENTENCE.highlited}
          <HeroHighlited>{HERO_TITLE_1ST_SENTENCE.colored}</HeroHighlited>
          {HERO_TITLE_2ND_SENTENCE.standard[1]}
          <HeroHighlited>{HERO_TITLE_2ND_SENTENCE.highlited}</HeroHighlited>
          {HERO_TITLE_2ND_SENTENCE.standard[2]}
        </HeroTitle>
        <HeroSubtitle>
          {HERO_SUBTITLE.standard[1]}
          <HeroSubtitleHighlited>{HERO_SUBTITLE.highlited}</HeroSubtitleHighlited>
          {HERO_SUBTITLE.standard[2]}
        </HeroSubtitle>
        <ButtonWrapper>
          <Button title="Quero saber mais" />
        </ButtonWrapper>
      </HeroDescription>
      <HeroImageWrapper>
        <HeroImage />
      </HeroImageWrapper>
    </Content>
  </Container>
);
