import * as React from 'react';
import {AppProps} from 'next/dist/shared/lib/router/router';
import 'tailwindcss/tailwind.css';
import {Header} from '../components/header';

const App = ({Component, pageProps, router}: AppProps): JSX.Element => (
  <>
    <Header route={router.asPath} />
    <Component {...pageProps} />
  </>
);

export default App;
