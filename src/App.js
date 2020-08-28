import React, {useEffect} from 'react';
import './style/App.css';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {auth} from './firebase';
import {SET_USER} from "./store/reducer";

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {useStateValue} from "./store/StateProvider";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        let action = {
          type: SET_USER,
          user: authUser
        }
        dispatch(action)
      } else {
        let action = {
          type: SET_USER,
          user: null
        }
        dispatch(action)
      }

      return () => {
        unsubscribe();
      }
    })
  }, [dispatch]);

  return (
      <div className="app">
        <Router>
          <Switch>

            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/">
              <Header/>
              <Home/>
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
