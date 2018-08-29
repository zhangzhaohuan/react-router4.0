import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RouteInterceptor from './index'
import asyncComponent from './asyncComponent'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Test = () => (
  <div>
    <h2>Test</h2>
  </div>
)
export default class Example extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/test">Test</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/test" render={() => <Test />} />
              <RouteInterceptor path="/news" component={asyncComponent(() => import('./News'))} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
