import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Boss01 from './boss01/Boss01';

const App = () => (
  <Container style={{ padding: '4rem 0', width: '1280px' }}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boss01" component={Boss01} />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
