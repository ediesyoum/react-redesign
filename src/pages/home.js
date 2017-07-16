import React, { Component } from 'react';
import Page from '../components/Page';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">
        <h1>eden syoum</h1>
        <h3>There should be some content here</h3>

        <div className="rectangle__teal"></div>

        <div className="rectangle__pink"></div>
      </Page>
    );
  }
}
