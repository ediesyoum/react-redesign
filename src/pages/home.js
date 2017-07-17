import React, { Component } from 'react';
import Page from '../components/Page';
import styled, { keyframes } from 'styled-components';

const coolBoxKeyframes = keyframes`
  0% {
    height: 0px;
    background: green;
  }
  100% {
    height: 200px;
    background: blue;
  }
`

const Box = styled.div`
  display: inline-block;
  background: green;
  width: 100px;
  position: relative;
  animation-name: ${coolBoxKeyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">
        <h1>eden syoum</h1>
        <h3>web development + design</h3>

        <Box/>

        <div className="rectangle__teal"></div>

        <div className="rectangle__pink"></div>
      </Page>
    );
  }
}
