import React from 'react';
import { Button, Grid, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './Boss01.module.scss';

const numArr1 = [2, 3, 4, 5, 6, 7, 8, 9];
const numArr2 = [1, 2, 3];
const numArr3 = [4, 5, 6, 7, 8, 9];

const renderLeft = firstNum => {
  return numArr2.map(num => {
    return (
      <p key={num}>
        {firstNum} x {num} = {firstNum * num}
      </p>
    );
  });
};

const renderRight = firstNum => {
  return numArr3.map(num => {
    return (
      <p key={num}>
        {firstNum} x {num} = {firstNum * num}
      </p>
    );
  });
};

const renderItem = () => {
  return numArr1.map(num => {
    return (
      <Grid.Column key={num}>
        <Segment className={styles.grid_item}>
          <div className={styles.grid_item_left}>
            <h3>{num}</h3>
            {renderLeft(num)}
          </div>
          <div className={styles.grid_item_right}>{renderRight(num)}</div>
        </Segment>
      </Grid.Column>
    );
  });
};

const Boss01 = () => (
  <>
    <Grid>
      <Grid.Column textAlign="center">
        <Link to="/">
          <Button primary>Home</Button>
        </Link>
      </Grid.Column>
    </Grid>
    <Container style={{ width: '1280px' }} className={styles.Container}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment className={styles.grid_item_1st}>
              <div className={styles.border_top}>
                <p>x</p>
                <div className={styles.line} />
                <p>x</p>
              </div>
              <div className={styles.title}>
                <h1>九九乘法表</h1>
                <h2>MULTIPLICATION CHART</h2>
              </div>
              <div className={styles.border_bottom}>
                <p>x</p>
                <div className={styles.line} />
                <p>x</p>
              </div>
            </Segment>
          </Grid.Column>
          {renderItem()}
        </Grid.Row>
      </Grid>
    </Container>
  </>
);

export default Boss01;
