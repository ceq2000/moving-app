import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import Splash from "./pages/Splash";
import Login from './pages/Login';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";

import itemDetails from "./pages/itemDetails";
import Items from "./pages/items";



// see https://reacttraining.com/react-router/web/example/auth-workflow

export default function App() {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Router>
      <Nav />



      <Switch>
        <ConnectedPublicRoute exact path="/" component={Splash} />
        <ConnectedPublicRoute path="/login" component={Login} />
        <ConnectedPublicRoute path="/signup" component={Signup} />
        <div className="App wrapper">
          <SideBar toggle={toggle} isOpen={isOpen} />
          <div>
            <Content toggle={toggle} isOpen={isOpen} />
            <ConnectedPrivateRoute exact path="/books" component={Books} />
            <ConnectedPrivateRoute path="/books/:id" component={Detail} />

            <ConnectedPrivateRoute exact path="/items" component={Items} />
            <ConnectedPrivateRoute path="/items/:id" component={itemDetails} />
          </div>

          <Route path="*"><NoMatch /></Route>

        </div>
      </Switch>

    </Router>

  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: routeProps.location }
              }}
            />
          )
      }
    />
  );
}

const ConnectedPrivateRoute = connect(
  // mapStateToProps
  state => ({ user: state.user.details })
)(PrivateRoute);

// A wrapper for <Route> that redirects to the books 
// screen if you're authenticated.
function PublicRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        !rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/items"
              }}
            />
          )
      }
    />
  );
}

const ConnectedPublicRoute = connect(
  // mapStateToProps
  state => ({ user: state.user.details })
)(PublicRoute);
