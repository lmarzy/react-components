import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/main.scss';

import Home from '../features/Home/Home';
import About from '../features/About/About';
import RenderProps from '../features/Render-Props/Render-Props';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/render-props" component={RenderProps} />
    </>
  </Router>
);

export default App;
