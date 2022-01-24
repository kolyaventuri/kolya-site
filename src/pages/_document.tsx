/* eslint-disable node/prefer-global/process */

import * as React from 'react';
import NextDoc, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class Document extends NextDoc {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDoc.getInitialProps(context);
    return {...initialProps};
  }

  render(): JSX.Element {
    return (
      <Html lang="en" className="overflow-y">
        <Head>
          <script
            src={`https://kit.fontawesome.com/${process.env.FA_TOKEN!}.js`}
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-gray-800 flex flex-col flex-wrap">
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Resolves an issue preventing full-height pages */
            #__next {
              height: 100vh;
              display: flex;
              flex-flow: column;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default Document;
