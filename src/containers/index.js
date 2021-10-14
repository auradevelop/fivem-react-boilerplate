import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import GlobalStyle from '../globalStyles';

const App = ({ hidden }) => (
  <div>
    <h1 hidden={process.env.NODE_ENV === 'development' ? !hidden : hidden}>Hello world</h1>
    <GlobalStyle />
  </div>
);

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ hidden: state.app.hidden });

export default connect(mapStateToProps)(App);
