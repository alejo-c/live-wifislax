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
						<h5 className="title"><strong>Herramientas utilizadas</strong></h5>
						<ul>
							{
								this.props.iconsLinks.map((iconLink, i) => {
									if (iconLink.spinning === true) {
										return <li className='Icon list-unstyled' key={i}>
											<img
												className={` Spinning-icon py-1 mr-${iconLink.mr}`}
												src={iconLink.src}
												width={iconLink.size}
												alt={iconLink.alt}
											/>
											<a href={iconLink.href}>{iconLink.text}</a>
										</li>
									}
									return <li className='Icon list-unstyled' key={i}>
										<img
											className={`py-1 mr-${iconLink.mr}`}
											src={iconLink.src}
											width={iconLink.size}
											alt={iconLink.alt}
										/>
										<a href={iconLink.href}>{iconLink.text}</a>
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
