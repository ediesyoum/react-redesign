import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.article`
	padding: 4em;
  border-radius: 20px;
	background: papayawhip;
  margin: 2em;
`;

const Header = styled.header`
  font-size: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: orange;
  font-family: sans-serif;
`;

const Content = styled.main`
`;

export default class Page extends Component {
  render() {
    return (
			<div className="body">
				<Container>
					<Header>
						<Title>{this.props.title}</Title>
					</Header>

					<Content>
						{this.props.children}
					</Content>
				</Container>
			</div>
		);
	}
}
