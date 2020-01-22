import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink } from "mdbreact"

export default class ContentTabbedBar extends Component {
	state = { isOpen: false }

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	handleToggleTab = tab => () => {
		this.props.onToggleTab(`${tab + 1}`)
		if (window.innerWidth < 768)
			this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		return <Router>
			<div className='navbar navbar-expand-md navbar-dark bg-dark text-center'>
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
											onClick={this.handleToggleTab(i)}
										>
											{tab.title}
										</MDBNavLink>
									</MDBNavItem>
								}
								return <MDBNavItem key={i}>
									<MDBNavLink
										to="#"
										onClick={this.handleToggleTab(i)}
									>
										{tab.title}
									</MDBNavLink>
								</MDBNavItem>
							})
						}
						{
							this.props.linkTabs.map((tab, i) => {
								return <MDBNavItem key={i}
									data-toggle="tooltip"
									title={tab.tooltip}
								>
									<MDBNavLink to="#" onClick={() => {
										window.open(tab.href, '_blank')
									}}>
										{tab.title}
									</MDBNavLink>
								</MDBNavItem>
							})
						}
					</MDBNavbarNav>
				</MDBCollapse>
			</div>
		</Router>
	}
}