import React, { Component } from 'react';
import { MDBTabContent, MDBTabPane } from 'mdbreact'

import './scrollable.css'

export default class ContentPages extends Component {
	render() {
		return <MDBTabContent
			className='card mt-sm-2 mx-sm-2'
			activeItem={this.props.activeTab}
		>
			{
				this.props.pages.map((page, i) =>
					<MDBTabPane
						key={i}
						tabId={`${i + 1}`}
						role='tabpanel'
						className='scrollable mx-xl-5'
					>{page}</MDBTabPane>
				)
			}
		</MDBTabContent>
	}
}