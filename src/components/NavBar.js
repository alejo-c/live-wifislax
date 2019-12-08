import React, { Component } from 'react'

import logo from '../images/logo.png'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<img src={logo} width='25' alt='logo' />
			<div className="ml-5 navbar-brand">Live WifiSlax</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					{
						this.props.tabsContent.map((tab, i) => {
							if (i === 0) {
								return <li key={i} className="nav-item active" >
									<div className="nav-link">{tab.title}<span className="sr-only">(current)</span></div>
								</li>
							}
							return <li key={i} className="nav-item">
								<div className="nav-link">{tab.title}</div>
							</li>
						})
					}
					<li className="nav-item">
						<a className="nav-link" href="https://foro.seguridadwireless.net/">Foro</a>
					</li>
				</ul>
			</div>
		</nav >
	}
}