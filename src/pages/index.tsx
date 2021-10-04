import React from 'react';
import Head from 'next/head';
import {GridItem} from '../components/grid-item';

class Home extends React.Component {
  render(): JSX.Element {
    return (
      <div className="flex flex-col flex-grow">
        <Head>
          <title>Kolya Venturi | Home</title>
        </Head>
        <div className="lg:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 sm:grid-rows-2 gap-0 flex flex-grow w-full">
          <GridItem
            top
            left
            background=""
            text="Software"
            className="sm:border-b-4 lg:border-r-4"
          />
          <GridItem bottom right background="" text="Lighting" />
        </div>
      </div>
    );
  }
}

export default Home;
