import React, { Component } from "react"
import {MDBCollapseHeader} from 'react'
import { MDBCollapse, MDBListGroup, MDBListGroupItem,  } from "mdbreact"

export default class CollapsePage extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }))
    }

    render() {
        return (
            <div>
                <MDBCollapseHeader 
                    className='text-info'
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "1rem" }}
                >
                    COLLAPSE BUTTON
                    <i className={ this.collapseID==="basicCollapse" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </MDBCollapseHeader>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <MDBListGroup style={{ width: "22rem" }}>
                        <MDBListGroupItem className='text-dark'>Cras justo odio</MDBListGroupItem>
                        <MDBListGroupItem className='text-dark'>Dapibus ac facilisis in</MDBListGroupItem>
                        <MDBListGroupItem className='text-dark'>Morbi leo risus</MDBListGroupItem>
                        <MDBListGroupItem className='text-dark'>Porta ac consectetur ac</MDBListGroupItem>
                        <MDBListGroupItem className='text-dark'>Vestibulum at eros</MDBListGroupItem>
                    </MDBListGroup>
                </MDBCollapse>
            </div>
        )
    }
}