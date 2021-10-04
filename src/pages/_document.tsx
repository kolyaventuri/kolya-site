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
      <Html>
        <Head />
        <body className="bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
