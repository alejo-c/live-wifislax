import React, { Component } from 'react';
import { MDBTabContent, MDBTabPane } from 'mdbreact'

import './scrollable.css'

export default class ContentTab extends Component {
	render() {
		return <MDBTabContent
			className='card mt-sm-2 mx-sm-2'
			activeItem={this.props.activeTab}
		>
			{
				this.props.contents.map((content, i) => {
					return <MDBTabPane
						key={i}
						tabId={`${i + 1}`}
						role='tabpanel'
						className='scrollable'
						style={{ overflowY: 'scroll', height: '500px' }}
					>{content}</MDBTabPane>
				})
			}
		</MDBTabContent>
	}
}