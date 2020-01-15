import React, { Component } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

import github from '../images/github-lg.png'

import './icon.css'

export default class FooterPage extends Component {
	render() {
		return <MDBFooter color="elegant-color" className="font-small pt-3">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow className='text-left'>
					<MDBCol md="5">
						<h5 className="title"><strong>Live WifiSlax</strong></h5>
						<p>
							Pagina Web que muestra una descripción general del
							sistema operativo Live WifiSlax, historia, pasos de
							instalacion, links de descarga para diferentes
							versiones y tutoriales de instalacion y uso.
            			</p>
					</MDBCol>

					<MDBCol md="2">
						<h5 className="title"><strong>Otros Enlaces</strong></h5>
						<ul>
							{
								this.props.links.map((link, i) => {
									return <li key={i} className='mb-1' style={{ listStyleType: 'none' }}>
										<i className="fa fa-angle-right mr-1" />
										<a href={link.href} target='_blank' rel='noopener noreferrer'>{link.text}</a>
									</li>
								})
							}
						</ul>
					</MDBCol>

					<MDBCol md='2'>
						<h5 className="title"><strong>Información de Contacto</strong></h5>
						<ul>
							<li style={{ listStyleType: 'none' }}>
								<i className="fa fa-envelope mr-1" />
								<strong>E-mail: </strong>
								<a href="mailto: live.wifislax@gmail.com" target='_blank' rel='noopener noreferrer'>live.wifislax@gmail.com</a>
							</li>
						</ul>
					</MDBCol>

					<MDBCol md="3">
						<h5 className="title"><strong>Herramientas Utilizadas</strong></h5>
						<ul>
							{
								this.props.iconsLinks.map((iconLink, i) => {
									let spinning = iconLink.spinning === true ? 'Spinning-icon' : ''
									return <li className='Icon list-unstyled' key={i}>
										<img
											className={`py-1 mr-${iconLink.mr} ` + spinning}
											src={iconLink.src}
											width={iconLink.size}
											alt={iconLink.alt}
										/>
										<a href={iconLink.href} target='_blank' rel='noopener noreferrer'>{iconLink.text}</a>
									</li>
								})
							}
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>

			<div className="footer-copyright text-center py-3 elegant-color-dark">
				<MDBContainer fluid>
					<img className='mr-1' src={github} width='17' alt='github-logo' />
					Repositorio de Github:<a href="https://github.com/alejo-castrillon/live-wifislax">live-wifislax.git</a>
				</MDBContainer>
			</div>
		</MDBFooter>
	}
}
