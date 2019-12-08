import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import github from '../images/github-lg.png'

export default class FooterPage extends Component {
	render() {
		return <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="title"><strong	>Live WifiSlax</strong	></h5>
						<p>
							Pagina web creada a partir de herramientas como
            			</p>
					</MDBCol>
					<MDBCol md="6">
						<h5 className="title"><strong>Herramientas usadas</strong></h5>
						<ul>
							{
								this.props.imageLinks.map((imageLink, i) => {
									console.log(imageLink)
									return <li className='list-unstyled' key={i}>
										<img className='mr-1' src={imageLink.src} width='17' alt={imageLink.alt} />
										<a href={imageLink.href}>{imageLink.text}</a>
									</li>
								})
							}
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					<img className='mr-1' src={github} width='17' alt='github-logo' />
					Repositorio de Github: <a href="https://github.com/alejo-castrillon/live-wifislax"> live-wifislax.git </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	}
}
