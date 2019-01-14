import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home'
import Subscriptions from './container/Subscriptions'
import Students from './container/Students'
import Classes from './container/Classes'
import SubscriptionForm from './container/SubscriptionForm'
import FormPrototype from './container/FormPrototype'
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/subscriptions' component={Subscriptions}/>
      <Route path='/students' component={Students}/>
      <Route path='/classes' component={Classes}/>
      <Route path='/subscriptionForm' component={SubscriptionForm}/>
      <Route path='/formPrototype' component={FormPrototype}/>
    </Route>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
