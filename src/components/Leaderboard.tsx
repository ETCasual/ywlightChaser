import { updateDoc, doc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';

export const LeaderBoard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return mounted ? (
    <>
      <Comp />
    </>
  ) : (
    <>Loading </>
  );
};

const Comp: React.FC = () => {
  const firestore = useFirestore();

  const ref = doc(firestore, 'cg', 'CYC16S');

  const update = () => {
    updateDoc(ref, { pass: '4567' });
  };

  const { status, data } = useFirestoreDocData(ref);

  return status === 'success' ? (
    <>
      <button onClick={() => update()}>Test</button>
      <span>{JSON.stringify(data, null, 2)}</span>
    </>
  ) : (
    <>Wait</>
  );
};
