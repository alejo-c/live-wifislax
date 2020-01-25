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
				<img className='mr-3' src={this.props.image} width='35' alt='tabbed-nav' />
				<div className='navbar-brand'><strong>{this.props.title}</strong></div>

				<MDBNavbarToggler onClick={this.toggleCollapse} />

				<MDBCollapse isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						{
							this.props.contentTabs.map((tab, i) => {
								return <MDBNavItem
									key={i}
									className={this.props.activeTab === `${i + 1}` ? 'active' : ''}
								>
									<MDBNavLink
										to="#"
										onClick={this.handleToggleTab(i)}
									>{tab}</MDBNavLink>
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
									}}>{tab.title}</MDBNavLink>
								</MDBNavItem>
							})
						}
					</MDBNavbarNav>
				</MDBCollapse>
			</div>
		</Router>
	}
}