import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Boss04 = () => (
  <>
    <Grid>
      <Grid.Column textAlign="center">
        <Link to="/">
          <Button primary>Home</Button>
        </Link>
      </Grid.Column>
    </Grid>
    <div style={{ width: '540px', margin: '50px auto' }}>
      <h1
        style={{
          fontSize: '72px',
          lineHeight: '100px',
          borderTop: '10px solid #000',
          borderBottom: '10px solid #000',
          letterSpacing: '1.48px',
          fontWeight: 'bolder',
          marginBottom: '30px'
        }}
      >
        WORLD CLOCK
      </h1>
    </div>
  </>
);

export default Boss04;
