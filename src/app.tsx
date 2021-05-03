import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
//import * as ROUTES from './constans/routes';
import { AppRoute } from './constans/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

// export default function App() {
const App: React.FC = () => {
  const { user } = useAuthListener();

  return (
    <Router>
        <IsUserRedirect 
          user={user} 
          loggedInPath={AppRoute.Browse} 
          path={AppRoute.Sign_in} 
        >
          <Signin />
        </IsUserRedirect> 
        <IsUserRedirect 
          user={user} 
          loggedInPath={AppRoute.Browse} 
          path={AppRoute.Sign_up} 
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute 
          user={user} 
          path={AppRoute.Sign_in} 
        >
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect 
          user={user} 
          loggedInPath={AppRoute.Home} 
          path={AppRoute.Home} 
        >
          <Home />
        </IsUserRedirect>
    </Router>
  );
};

export default App;
