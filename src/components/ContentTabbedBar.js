import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNav, MDBNavItem, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink, MDBTabContent, MDBTabPane } from "mdbreact";

import { AuthConsumer } from 'react-check-auth';

export default class ContentTabbedBar extends Component {
    constructor() {
        super()
        this.state = { activeItem: "1", isOpen: false }
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
                                if (i === 0) {
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
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

            <MDBTabContent className="card" activeItem={this.state.activeItem}>
                {
                    this.props.contentTabs.map((tab, i) => {
                        return <MDBTabPane key={i} tabId={i} role="tabpanel">
                            <Router>
                                <AuthConsumer>{tab.content}</AuthConsumer>
                            </Router>
                        </MDBTabPane>
                    })
                }
            </MDBTabContent>
        </Router >
    }
}