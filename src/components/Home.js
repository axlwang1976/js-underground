import React from 'react';
import { Header, Image, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Image
      src="https://udemy-images.udemy.com/course/480x270/2165164_de7e.jpg"
      centered
    />
    <Header as="h1" textAlign="center">
      新手 JS 地下城
    </Header>
    <Grid>
      <Grid.Column textAlign="center">
        <Link to="/boss01">
          <Button primary>BOSS-01：9x9 乘法表</Button>
        </Link>
      </Grid.Column>
    </Grid>
    <Grid>
      <Grid.Column textAlign="center">
        <Link to="/boss02">
          <Button primary>BOSS-02：時鐘</Button>
        </Link>
      </Grid.Column>
    </Grid>
  </>
);

export default Home;
