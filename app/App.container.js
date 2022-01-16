import React from 'react';
import HomePage from './pages/Home.page';
import { connect } from 'react-redux';

function App(props) {
  return (
    <HomePage />
  );
}

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(App)