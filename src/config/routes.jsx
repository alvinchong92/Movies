import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from '../components/Home.jsx';
import Main from '../components/main.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/login.jsx';
import App from '../components/App.jsx';
import requireAuth from '../utils/auth.js';
import Todo from '../components/Todo.jsx';

const Routes= () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="register" component={Register}/>
        <Route path="login" component={Login}/>
        <Route path="app" component={App} onEnter={requireAuth}>
          <Route path="/todo" component={Todo} />
        </Route>
      </Route>
    </Router>
  )
}

export default Routes;
