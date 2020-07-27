import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jumbotron from './components/jumbotron/Jumbotron';
import NavigationBar from './components/navigationBar/NavigationBar';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import NoMatch from './components/noMatch/NoMatch';
import Driver from './components/driver/Driver';
import Drivers from './components/drivers/Drivers';

const App = () => (
  <Router>
    <NavigationBar />
    <Jumbotron />
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/driver" component={Driver} />
        <Route path="/drivers" component={Drivers} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
