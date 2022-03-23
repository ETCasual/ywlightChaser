import { NextPage } from 'next';

const ARPage: NextPage = () => {
  return typeof document !== 'undefined' ? <>console.log('hello')</> : <p>Loading</p>;
};

export default ARPage;
