import React, { Component } from "react";
import { MDBTabContent, MDBTabPane } from "mdbreact"

import Start from './content/Start'
import History from './content/History'
import Versions from './content/Versions'
import Instalation from './content/Instalation'

import './scrollable.css'

export default class ContentTab extends Component {
	render() {
		const scrollbarStyle = { overflowY: "scroll", height: "500px" }

		return <div className='text-left'>
			<MDBTabContent className="card" activeItem={this.props.activeTab}>
				<MDBTabPane tabId='1' role="tabpanel">
					<div className="scrollable" style={scrollbarStyle}>
						<Start />
					</div>
				</MDBTabPane>

				<MDBTabPane tabId='2' role="tabpanel">
					<div className="scrollable" style={scrollbarStyle}>
						<History />
					</div>
				</MDBTabPane>

				<MDBTabPane tabId='3' role="tabpanel">
					<div className="scrollable" style={scrollbarStyle}>
						<Instalation />
					</div>
				</MDBTabPane>

				<MDBTabPane tabId='4' role="tabpanel">
					<div className="scrollable" style={scrollbarStyle}>
						<Versions />
					</div>
				</MDBTabPane>
			</MDBTabContent>
		</div>
	}
}