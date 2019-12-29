import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavbar, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink } from "mdbreact"

export default class ContentTabbedBar extends Component {
	constructor() {
		super()
		this.state = { isOpen: false }
		this.scrollSpyText = React.createRef()
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
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
								if (this.props.activeTab === `${i + 1}`) {
									return <MDBNavItem key={i} active>
										<MDBNavLink
											to="#"
											onClick={this.props.onToggleTab(`${i + 1}`)}
										>
											{tab.title}
										</MDBNavLink>
									</MDBNavItem>
								}
								return <MDBNavItem key={i}>
									<MDBNavLink
										to="#"
										onClick={this.props.onToggleTab(`${i + 1}`)}
									>
										{tab.title}
									</MDBNavLink>
								</MDBNavItem>
							})
						}
						{
							this.props.linkTabs.map((tab, i) => {
								return <MDBNavItem>
									<MDBNavLink to="#" onClick={() => {
										window.open(tab.href, '_self')
									}}>
										{tab.title}
									</MDBNavLink>
								</MDBNavItem>
							})
						}
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		</Router>
	}
}