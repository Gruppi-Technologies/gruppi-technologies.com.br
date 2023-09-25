import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import { Container, Text, Title, TitleWrapper } from './styles';

interface Props {
  title: string;
  text: string;
  imgSrc: StaticImageData;
}

export const AboutUsItem: FC<Props> = ({ title, text, imgSrc }) => (
  <Container>
    <TitleWrapper>
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <Title>{title}</Title>
    </TitleWrapper>
    <Text>{text}</Text>
  </Container>
);
