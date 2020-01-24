import React, { Component } from 'react'
import { MDBCollapse, MDBListGroup, MDBListGroupItem } from 'mdbreact'

export default class SideLinksPage extends Component {
	state = { collapseID: '' }

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}))
	}

	render() {
		return <div>
			{
				this.props.menus.map((menu, i) => {
					const angle = this.state.collapseID === `${i}`
						? 'fa fa-angle-up'
						: 'fa fa-angle-down'
					return <MDBListGroupItem
						className='text-white elegant-color-dark m-0 pl-2 pr-1'
						key={i}
					>
						<div onClick={this.toggleCollapse(`${i}`)}>
							{menu.title} <i className={angle} />
						</div>
						<MDBCollapse id={`${i}`} isOpen={this.state.collapseID}>
							<MDBListGroup>
								{
									menu.links.map((link, j) => {
										return <MDBListGroupItem
											className='elegant-color-dark'
											key={j}
										>
											<a
												className='text-white'
												href={link.href}
												target='_blank'
												rel='noopener noreferrer'
												onClick={this.toggleCollapse(`${i}`)}
											>{link.text}</a>
										</MDBListGroupItem>
									})
								}
							</MDBListGroup>
						</MDBCollapse>

					</MDBListGroupItem>
				})
			}
		</div>
	}
}
