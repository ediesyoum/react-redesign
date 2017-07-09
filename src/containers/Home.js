import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class Home extends Component {

  render() {
    return (
      <div>
      <Title>Test</Title>
      </div>
    );
  }
}
