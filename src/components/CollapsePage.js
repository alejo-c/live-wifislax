import React, { Component } from "react"
import { MDBContainer, MDBCollapse, MDBListGroup, MDBListGroupItem } from "mdbreact"

export default class CollapsePage extends Component {
	constructor() {
		super()
		this.state = {¿collapseID: ""}
	}

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}))
	}

	render() {
		return <div>
			<MDBContainer
				color="primary"
				onClick={this.toggleCollapse("basicCollapse")}
				style={{ marginBottom: "1rem" }}
			>
				COLLAPSE BUTTON
            	<i className={'ml-1 '+(this.state.collapseID === "basicCollapse" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down")} />
			</MDBContainer>

			<MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
				<MDBListGroup style={{ width: "22rem" }}>
					<MDBListGroupItem className='text-dark'>Cras justo odio</MDBListGroupItem>
					<MDBListGroupItem className='text-dark'>Dapibus ac facilisis in</MDBListGroupItem>
					<MDBListGroupItem className='text-dark'>Morbi leo risus</MDBListGroupItem>
					<MDBListGroupItem className='text-dark'>Porta ac consectetur ac</MDBListGroupItem>
					<MDBListGroupItem className='text-dark'>Vestibulum at eros</MDBListGroupItem>
				</MDBListGroup>
			</MDBCollapse>
		</div >
	}
}