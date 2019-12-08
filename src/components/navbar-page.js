import React, { Component } from "react";
import {
	MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import logo from '../images/logo.png'

class NavbarPage extends Component {
	constructor() {
		super()
		this.state = { isOpen: false }
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		return (
			<Router>
				<MDBNavbar color="elegant-color-dark" dark expand="md">
					<MDBNavbarNav left>
						<MDBNavItem>
							<img src={logo} className='mr-4' width='40' alt='logo' />
						</MDBNavItem>
					</MDBNavbarNav>

					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav left>
							{
								this.props.tabsContent.map((tab, i) => {
									if (i === 0) {
										return <MDBNavItem key={i} active>
											<MDBNavLink to="#!">{tab.title}</MDBNavLink>
										</MDBNavItem>
									}
									return <MDBNavItem key={i} >
										<MDBNavLink to="#!">{tab.title}</MDBNavLink>
									</MDBNavItem>
								})
							}
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
			</Router >
		);
	}
}

export default NavbarPage;