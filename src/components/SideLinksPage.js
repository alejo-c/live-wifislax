import React, { Component } from "react"
import { MDBContainer, MDBCollapse, MDBListGroup, MDBListGroupItem } from "mdbreact"

export default class SideLinksPage extends Component {
	constructor() {
		super()
		this.state = {collapseID: ""}
	}

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}))
	}

	render() {
		return <div>
			{
				this.props.menus.map((menu, i) => {
					return <MDBListGroup key={i}>
						<MDBContainer
							color="primary"
							onClick={this.toggleCollapse(i)}
							style={{ marginBottom: "1rem" }}
						>
							{menu.title}
							<i className={'ml-1 '+(this.state.collapseID === {i} ? "fa fa-angle-down" : "fa fa-angle-down")} />
						</MDBContainer>
						
						<MDBCollapse id={i} isOpen={this.state.collapseID}>
							<MDBListGroup>
								{
									menu.links.map((link, j) => {
										return <MDBListGroupItem className='elegant-color' key={j}>
											<a className='text-white' href={link.href}>{link.text}</a>
										</MDBListGroupItem>
									})
								}
							</MDBListGroup>
						</MDBCollapse>
					</MDBListGroup>
				})
			}
		</div >
	}
}
