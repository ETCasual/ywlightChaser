import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../config/constants';
import { FirebaseProps } from '../config/firebaseProps';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseProps>
        <Component {...pageProps} />
      </FirebaseProps>
    </FirebaseAppProvider>
  );
}
export default MyApp;
