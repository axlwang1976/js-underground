import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './Boss02.module.scss';

class Boss02 extends React.Component {
  state = {
    secDeg: null,
    minDeg: null,
    hourDeg: null
  };

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  setTime = () => {
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = (360 / 60) * sec + 180;
    const min = now.getMinutes();
    const minDeg = (360 / 60) * min + (6 / 60) * sec + 180;
    const hour = now.getHours();
    const hourDeg = (360 / 12) * (hour % 12) + (30 / 60) * min + 270;
    this.setState({ secDeg, minDeg, hourDeg });
  };

  render() {
    return (
      <>
        <Grid>
          <Grid.Column textAlign="center">
            <Link to="/">
              <Button primary>Home</Button>
            </Link>
          </Grid.Column>
        </Grid>
        <div className={styles.clock}>
          <div className={styles.clock_face}>
            <div
              className={styles.hand_hour}
              style={{ transform: `rotate(${this.state.hourDeg}deg)` }}
            />
            <div
              className={styles.hand_min}
              style={{ transform: `rotate(${this.state.minDeg}deg)` }}
            />
            <div
              className={styles.hand_sec}
              style={{ transform: `rotate(${this.state.secDeg}deg)` }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Boss02;
