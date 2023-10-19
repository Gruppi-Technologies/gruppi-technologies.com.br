import ReactModal from 'react-modal';
import styled from 'styled-components';

import theme from '@/styles/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactModalAdapter = ({ className, ...props }: any) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <ReactModal
      className={contentClassName}
      overlayClassName={overlayClassName}
      portalClassName={className}
      {...props}
    />
  );
};

export const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9999;

    padding: 0 4rem;

    width: 100%;
    height: 100%;

    @media (max-width: 350px) {
      padding: 0 1rem;
    }
  }

  &__content {
    max-height: 100vh;
    width: 100%;

    max-width: 50rem;

    background-color: ${theme.colors.white};

    border-radius: ${theme.borderRadius};
    outline: none;

    padding: 0.8rem 1.2rem 2.4rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    overflow: ${({ enableScrollOnOverflow }) => (enableScrollOnOverflow ? 'auto' : '')};
    overflow-x: hidden;

    @media (max-width: 350px) {
      padding: 0.8rem 0.5rem 2.4rem;
    }
  }
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
