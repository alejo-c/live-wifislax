import React, { Component } from 'react';
import { MDBTabContent, MDBTabPane } from 'mdbreact'

import Start from './content/Start'
import History from './content/History'
import Versions from './content/Versions'
import Instalation from './content/Instalation'

import './scrollable.css'

export default class ContentTab extends Component {
	render() {
		const scrollbarStyle = { overflowY: 'scroll', height: '500px' }

		return <MDBTabContent className='card mt-sm-2 mx-sm-2' activeItem={this.props.activeTab}>
			<MDBTabPane
				tabId='1'
				role='tabpanel'
				className='scrollable'
				style={scrollbarStyle}
			>
				<Start />
			</MDBTabPane>

			<MDBTabPane
				tabId='2'
				role='tabpanel'
				className='scrollable'
				style={scrollbarStyle}
			>
				<History />
			</MDBTabPane>

			<MDBTabPane
				tabId='3'
				role='tabpanel'
				className='scrollable'
				style={scrollbarStyle}
			>
				<Instalation />
			</MDBTabPane>

			<MDBTabPane
				tabId='4'
				role='tabpanel'
				className='scrollable'
				style={scrollbarStyle}
			>
				<Versions />
			</MDBTabPane>
		</MDBTabContent>
	}
}