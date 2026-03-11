import { FC } from 'react';

import missionImg from './assets/mission.svg';
import valuesImg from './assets/values.svg';
import visionImg from './assets/vision.svg';
import { AboutUsItem } from './components/about-us-item/about-us-item';
import { OUR_MISSION, OUR_VALUES, OUR_VISION, SECTION_TITLE } from './constants';
import { AboutUsWrapper, Container, Content, Title } from './styles';

export const AboutUsSection: FC = () => (
  <Container>
    <Content>
      <Title>{SECTION_TITLE}</Title>
      <AboutUsWrapper>
        <AboutUsItem title="Missão" text={OUR_MISSION} imgSrc={missionImg} />
        <AboutUsItem title="Visão" text={OUR_VISION} imgSrc={visionImg} />
        <AboutUsItem title="Valores" text={OUR_VALUES} imgSrc={valuesImg} />
      </AboutUsWrapper>
    </Content>
  </Container>
);
