import { FC, useState } from 'react';

import { PlusIcon } from '@/components/icon/plus-icon';

import { Answer, FaqCardContainer, FaqCardContent, IconWrapper, Question } from './styles';

interface Props {
  question: string;
  answer: string;
}

export const FaqCard: FC<Props> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    setIsIconRotated(!isIconRotated);
  };

  return (
    <FaqCardContainer onClick={toggleExpansion} isExpanded={isExpanded}>
      <FaqCardContent>
        <Question>{question}</Question>
        <IconWrapper isRotated={isIconRotated}>
          <PlusIcon />
        </IconWrapper>
      </FaqCardContent>
      {isExpanded && <Answer>{answer}</Answer>}
    </FaqCardContainer>
  );
};
