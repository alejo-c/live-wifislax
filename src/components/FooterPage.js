import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import github from '../images/github-lg.png'

import './icon.css'

export default class FooterPage extends Component {
	render() {
		return <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow className='text-left'>
					<MDBCol md="6">
						<h5 className="title"><strong>Live WifiSlax</strong></h5>
						<p>
							Description
            			</p>
					</MDBCol>
					<MDBCol md="6">
						<h5 className="title"><strong>Herramientas usadas</strong></h5>
						<ul>
							{
								this.props.imageLinks.map((imageLink, i) => {
									if (imageLink.spinning === true) {
										return <li className='Icon list-unstyled' key={i}>
											<img
												className={` Spinning-icon py-1 mr-${imageLink.mr}`}
												src={imageLink.src}
												width={imageLink.size}
												alt={imageLink.alt}
											/>
											<a href={imageLink.href}>{imageLink.text}</a>
										</li>
									}
									return <li className='Icon list-unstyled' key={i}>
										<img
											className={`py-1 mr-${imageLink.mr}`}
											src={imageLink.src}
											width={imageLink.size}
											alt={imageLink.alt}
										/>
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
					Repositorio de Github: <a href="https://github.com/alejo-castrillon/live-wifislax"> live-wifislax.git</a>
				</MDBContainer>
			</div>
		</MDBFooter>
	}
}
