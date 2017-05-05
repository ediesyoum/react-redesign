import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
      <Title>Test</Title>
      </div>
    );
  }
}
