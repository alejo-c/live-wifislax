import React, { Component } from "react";
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import './icon.css'
import logo from '../images/logo.png'

class NavbarPage extends Component {
	constructor() {
		super()
		this.state = { isOpen: false }
	}

	handleClick = (e) => {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		return <Router>
			<MDBNavbar color="elegant-color-dark" dark expand="md">
				<MDBNavbarNav left>
					<MDBNavItem>
						<img className='Icon mr-4' src={logo} width='40' alt='logo' />
					</MDBNavItem>
				</MDBNavbarNav>

				<MDBNavbarBrand><strong>Live WifiSlax</strong></MDBNavbarBrand>

				<MDBNavbarToggler onClick={this.toggleCollapse} />

				<MDBCollapse id="navbarCollaps3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						{
							this.props.contentTabs.map((tab, i) => {
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
						<MDBNavItem>
							<a className='nav-link' href={this.props.linkTab.href}>{this.props.linkTab.title}</a>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		</Router >
	}
}

export default NavbarPage;