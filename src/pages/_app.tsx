import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import ReactModal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { ModalProvider } from '@/contexts/modal-context/modal-context-provider';
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    async function setReactModalAppElement() {
      const { default: ReactModal } = await import('react-modal');
      ReactModal.setAppElement('#__next');
    }
    setReactModalAppElement();
  }, []);

  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ModalProvider>
  );
};

export default App;
