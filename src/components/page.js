import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
			<div className="body">
				<div className="container">
					<div className="header">
						<div className="title">{this.props.title}</div>
					</div>

					<div className="content">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
