import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { useState } from 'react';
import { Ticket } from '../components/main/ticket';

export function MyApp({ Component, pageProps }: AppProps) {

  const [pageProds, setpageProds] = useState()

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
