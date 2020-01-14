import React, { Component } from "react"
import { MDBCollapse, MDBListGroup, MDBListGroupItem } from "mdbreact"

export default class SideLinksPage extends Component {
	constructor() {
		super()
		this.state = { collapseID: "" }
	}

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}))
	}

	render() {
		return <MDBListGroup>
			{
				this.props.menus.map((menu, i) => {
					var angle = this.state.collapseID === i ? "fa fa-angle-up" : "fa fa-angle-down"
					return <MDBListGroupItem className="text-white elegant-color-dark px-0 pb-0 text-left" key={i}>
						<div
							className='container'
							onClick={this.toggleCollapse(i)}
							style={{ marginTop: "10px" }}
						>
							{menu.title}  <i className={'ml-1 ' + angle} />
						</div>

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
					</MDBListGroupItem>
				})
			}
		</MDBListGroup>
	}
}
