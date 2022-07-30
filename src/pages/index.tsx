import * as React from 'react';
import Head from 'next/head';

import Intro from '../components/intro';
import Main from '../components/main';
import {useQueryParameters} from '../hooks/use-query-parameters';

const Home = (): JSX.Element => {
  const [isIntroDone, setIntroDone] = React.useState(false);
  const queryParameters = useQueryParameters();

  const onIntroComplete = () => {
    setIntroDone(true);
  };

  React.useEffect(() => {
    if (queryParameters?.skipIntro) {
      onIntroComplete();
    }
  }, [queryParameters]);

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>Kolya Venturi</title>
      </Head>
      {isIntroDone ? <Main /> : <Intro onComplete={onIntroComplete} />}
    </div>
  );
};

export default Home;
