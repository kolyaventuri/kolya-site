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
        <div className="flex-grow flex flex-col lg:flex-row">
          <GridItem
            top
            left
            background=""
            text="Software"
            className="border-b-4 lg:border-b-0 lg:border-r-4"
          />
          <GridItem bottom right background="" text="Lighting" />
        </div>
      </div>
    );
  }
}

export default Home;
