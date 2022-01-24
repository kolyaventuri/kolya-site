import * as React from 'react';
import Head from 'next/head';

import Intro from '../components/intro';
import Main from '../components/main';

const Home = (): JSX.Element => {
  const [isIntroDone, setIntroDone] = React.useState(false);

  const onIntroComplete = () => {
    setIntroDone(true);
  };

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>Kolya Venturi | Home</title>
      </Head>
      {isIntroDone ? <Main /> : <Intro onComplete={onIntroComplete} />}
    </div>
  );
};

export default Home;
