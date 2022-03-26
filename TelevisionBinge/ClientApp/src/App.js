import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Results } from './components/Results';

import './custom.css'

export default class App extends Component {
  render () {
    return (
      <Layout>
        <Route exact path='/h' component={Home} />
        <Route exact path='/r' component={Results} />
      </Layout>
    );
  }
}
