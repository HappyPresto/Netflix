import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constans/routes';

// export default function App() {
const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path="user">
        <p>Hello i'm a user</p>
      </Route>
    </Router>
  );
};

export default App;
