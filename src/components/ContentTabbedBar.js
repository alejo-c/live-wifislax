import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavbar, MDBNavItem, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink, MDBTabContent, MDBTabPane } from "mdbreact"

import Start from './content/Start'
import History from './content/History'
import Vertions from './content/Versions'
import Instalation from './content/Instalation'

import SideLinksPage from './SideLinksPage'

import menuLinks from '../data/menu-links.json'

export default class ContentTabbedBar extends Component {
	constructor() {
		super()
		this.state = { activeItem: "1", isOpen: false }
		this.scrollSpyText = React.createRef()
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	toggle = tab => () => {
		if (this.state.activeItem !== tab) {
			this.setState({ activeItem: tab })
		}
	}

	render() {
		return <Router>
			<MDBNavbar color="elegant-color-dark" dark expand="md">
				<MDBNavItem>
					<img className='mr-4' src={this.props.image} width='40' alt='tabbed-nav' />
				</MDBNavItem>

				<MDBNavbarBrand>
					<strong className="white-text">{this.props.title}</strong>
				</MDBNavbarBrand>

				<MDBNavbarToggler onClick={this.toggleCollapse} />

				<MDBCollapse id="navbarCollaps3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						{
							this.props.contentTabs.map((tab, i) => {
								if (this.state.activeItem === (i + 1) + '') {
									return <MDBNavItem key={i} active>
										<MDBNavLink
											to="#"
											active={this.state.activeItem === (i + 1) + ''}
											onClick={this.toggle((i + 1) + '')}
											role="tab"
										>{tab.title}</MDBNavLink>
									</MDBNavItem>
								}
								return <MDBNavItem key={i}>
									<MDBNavLink
										to="#"
										active={this.state.activeItem === (i + 1) + ''}
										onClick={this.toggle((i + 1) + '')}
										role="tab"
									>{tab.title}</MDBNavLink>
								</MDBNavItem>
							})
						}
						<MDBNavItem>
							<MDBNavLink to="#" onClick={() => {
								window.open(this.props.linkTab.href, '_self')
							}}>{this.props.linkTab.title}</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>

			<div className='row text-left'>
				<MDBTabContent className="card col-10" activeItem={this.state.activeItem}>
					<MDBTabPane tabId='1' role="tabpanel">
						<Start />
					</MDBTabPane>

					<MDBTabPane tabId='2' role="tabpanel">
						<History />
					</MDBTabPane>

					<MDBTabPane tabId='3' role="tabpanel">
						<Instalation />
					</MDBTabPane>

					<MDBTabPane tabId='4' role="tabpanel">
						<Vertions />
					</MDBTabPane>
				</MDBTabContent>

				<div className='bg-dark text-white col-2'>
					<SideLinksPage menus={menuLinks} />
				</div>
			</div>
		</Router >
	}
}