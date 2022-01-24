import * as React from 'react';

import Heading from './heading';
import Footer from './footer';

const Main = (): JSX.Element => {
  return (
    <div className="h-full w-full top-0 left-0">
      <Heading />
      <Footer />
    </div>
  );
};

export default Main;
