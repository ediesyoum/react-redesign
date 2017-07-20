import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import triangle from '../assets/img/logo-triangle.svg';
import styled, { keyframes } from 'styled-components';

export default class Page extends Component {
  render() {
    return (
			<div className="container">
				<div className="title">{this.props.title}</div>

				<div className="header">
          <img className="logo" src={logo} />

          <div className="logo-wrapper">
            <div className="logo-triangle"></div>
          </div>
				</div>

				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}
