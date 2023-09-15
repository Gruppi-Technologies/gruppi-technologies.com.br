import { FC, useState } from 'react';

import { PlusIcon } from '@/components/icons/plus-icon';

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
    <FaqCardContainer onClick={toggleExpansion} expanded={isExpanded ? true : undefined}>
      <FaqCardContent>
        <Question>{question}</Question>
        <IconWrapper rotated={isIconRotated ? true : undefined}>
          <PlusIcon />
        </IconWrapper>
      </FaqCardContent>
      {isExpanded && <Answer>{answer}</Answer>}
    </FaqCardContainer>
  );
};
