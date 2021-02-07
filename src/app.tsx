import React from 'react';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';

// export default function App() {
const App: React.FC = () => {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
};

export default App;
