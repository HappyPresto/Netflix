import React from 'react';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';
import FaqsContainer from './containers/faqs';

// export default function App() {
const App: React.FC = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default App;
