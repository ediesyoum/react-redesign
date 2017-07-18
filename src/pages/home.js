import React, { Component } from 'react';
import Page from '../components/Page';
import Wave from '../assets/img/wave.svg';
import logo from '../assets/img/logo.svg';
// import styled, { keyframes } from 'styled-components';
//
// // const test-keyframes = keyframes`
// //   0% {
// //     height: 0px;
// //     background: green;
// //   }
// //   100% {
// //     height: 200px;
// //     background: blue;
// //   }
// // `
//
// // const Box = styled.div`
// //   display: inline-block;
// //   background: green;
// //   width: 100px;
// //   position: relative;
// //   animation-name: ${test-keyframes};
// //   animation-duration: 2s;
// //   animation-timing-function: ease;
// //   animation-delay: 0s;
// //   animation-iteration-count: 1;
// //   animation-direction: normal;
// //   animation-fill-mode: forwards;
// //   animation-play-state: running;
// // `

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <div className="header">
          <img className="logo" src={logo} />
        </div>

        <div className="triangle-wrapper">
          <div className="triangle-yellow"></div>
        </div>

        <content>
          <img className="wave" src={Wave} />

          <div className="rectangle__teal"></div>

          <div className="rectangle__pink"></div>

          <div className="circle"></div>
        </content>

          <div>
            <h3>web development + design</h3>
          </div>
      </Page>
    );
  }
}
