import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import WrapperPage from './WrapperPage';
import Test from './test';

class Main extends Component {
  render() {
    return (
      <WrapperPage>
        <Test/>
      </WrapperPage>
    );
  };
}

export default Main;
