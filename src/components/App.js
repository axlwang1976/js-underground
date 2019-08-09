import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Boss01 from './boss01/Boss01';
import Boss02 from './boss02/Boss02';
import Boss03 from './boss03/Boss03';
import Boss04 from './boss04/Boss04';
import D3test from './d3test/D3test';

const App = () => (
  <Container style={{ padding: '4rem 0', width: '1280px' }}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boss01" exact component={Boss01} />
        <Route path="/boss02" exact component={Boss02} />
        <Route path="/boss03" exact component={Boss03} />
        <Route path="/boss04" exact component={Boss04} />
        <Route path="/d3-test" exact component={D3test} />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
