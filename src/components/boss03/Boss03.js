import React from 'react';
import math from 'mathjs';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Boss03.scss';
import Display from './Display';
import Button1 from './Button';

class Boss03 extends React.Component {
  state = {
    calc: [],
    res: 0
  };

  numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  doCalc = () => {
    let result = this.state.calc.join('');
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      const resWithCommas = this.numberWithCommas(result);
      this.setState({ calc: [], res: resWithCommas });
    }
  };

  onClickHandler = e => {
    const value = e.target.getAttribute('data-value');
    const label = e.target.getAttribute('data-label');
    if (value === 'clear') {
      this.setState({ calc: [], res: 0 });
    } else if (value === 'del') {
      const newCalc = [...this.state.calc];
      newCalc.pop();
      this.setState({ calc: newCalc });
    } else if (value === 'equal') {
      this.doCalc();
    } else {
      const newCalc = [...this.state.calc];
      newCalc.push(value);
      this.setState({ calc: newCalc });
    }
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
        <div className="wrapper">
          <Display calc={this.state.calc} res={this.state.res} />
          <div className="buttons">
            <Button1 onClick={this.onClickHandler} label="7" value="7" />
            <Button1 onClick={this.onClickHandler} label="8" value="8" />
            <Button1 onClick={this.onClickHandler} label="9" value="9" />
            <Button1 onClick={this.onClickHandler} label="&divide;" value="/" />
            <Button1 onClick={this.onClickHandler} label="4" value="4" />
            <Button1 onClick={this.onClickHandler} label="5" value="5" />
            <Button1 onClick={this.onClickHandler} label="6" value="6" />
            <Button1 onClick={this.onClickHandler} label="&times;" value="*" />
            <Button1 onClick={this.onClickHandler} label="1" value="1" />
            <Button1 onClick={this.onClickHandler} label="2" value="2" />
            <Button1 onClick={this.onClickHandler} label="3" value="3" />
            <Button1 onClick={this.onClickHandler} label="&#43;" value="+" />
            <Button1 onClick={this.onClickHandler} label="0" value="0" />
            <Button1 onClick={this.onClickHandler} label="00" value="00" />
            <Button1 onClick={this.onClickHandler} label="." value="." />
            <Button1 onClick={this.onClickHandler} label="&minus;" value="-" />
            <Button1 onClick={this.onClickHandler} label="AC" value="clear" />
            <Button1 onClick={this.onClickHandler} label="⌫" value="del" />
            <Button1
              onClick={this.onClickHandler}
              label="="
              value="equal"
              size="2"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Boss03;
