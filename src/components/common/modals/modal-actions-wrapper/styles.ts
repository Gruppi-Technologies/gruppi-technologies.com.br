import styled from 'styled-components';

export const BaseModalActionsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.25rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  gap: 0.7rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
