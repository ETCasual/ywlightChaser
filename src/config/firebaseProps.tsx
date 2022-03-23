import { FirestoreProvider, useFirebaseApp } from 'reactfire';

import { getFirestore } from 'firebase/firestore';

export const FirebaseProps: React.FC = ({ children }) => {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(app);
  return <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>;
};
