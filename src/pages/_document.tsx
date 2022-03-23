import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
          <script src="https://rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
