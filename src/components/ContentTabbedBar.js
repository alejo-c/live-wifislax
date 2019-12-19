import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavbar, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink, MDBTabContent, MDBTabPane } from "mdbreact"

import Start from './content/Start'
import History from './content/History'
import Versions from './content/Versions'
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
		const scrollbarStyle = { overflowY: "scroll", height: "500px" }

		return <Router>
			<MDBNavbar color="elegant-color-dark" dark expand="md">
				<div className='nav-item'>
					<img className='mr-3' src={this.props.image} width='40' alt='tabbed-nav' />
				</div>

				<div className='navbar-brand'>
					<strong className="white-text">{this.props.title}</strong>
				</div>

				<MDBNavbarToggler onClick={this.toggleCollapse} />

				<MDBCollapse isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						{
							this.props.contentTabs.map((tab, i) => {
								if (this.state.activeItem === (i + 1) + '') {
									return <MDBNavItem key={i} active>
										<MDBNavLink
											to="#"
											onClick={this.toggle((i + 1) + '')}
										>
											{tab.title}
										</MDBNavLink>
									</MDBNavItem>
								}
								return <MDBNavItem key={i}>
									<MDBNavLink
										to="#"
										onClick={this.toggle((i + 1) + '')}
									>
										{tab.title}
									</MDBNavLink>
								</MDBNavItem>
							})
						}
						<MDBNavItem>
							<MDBNavLink to="#" onClick={() => {
								window.open(this.props.linkTab.href, '_self')
							}}>
								{this.props.linkTab.title}
							</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>

			<div className='row text-left'>
				<MDBTabContent className="card col-10" activeItem={this.state.activeItem}>
					<MDBTabPane tabId='1' role="tabpanel">
						<div className="scrollbar" style={scrollbarStyle}>
							<Start />
						</div>
					</MDBTabPane>

					<MDBTabPane tabId='2' role="tabpanel">
						<div className="scrollbar" style={scrollbarStyle}>
							<History />
						</div>
					</MDBTabPane>

					<MDBTabPane tabId='3' role="tabpanel">
						<div className="scrollbar" style={scrollbarStyle}>
							<Instalation />
						</div>
					</MDBTabPane>

					<MDBTabPane tabId='4' role="tabpanel">
						<div className="scrollbar" style={scrollbarStyle}>
							<Versions />
						</div>
					</MDBTabPane>
				</MDBTabContent>

				<div className='bg-dark text-white col-2'>
					<SideLinksPage menus={menuLinks} />
				</div>
			</div>
		</Router>
	}
}