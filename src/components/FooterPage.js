import React, { Component } from "react"
import { MDBFooter } from "mdbreact"

import github from '../images/github.png'

import './icon.css'

export default class FooterPage extends Component {
	render() {
		return <MDBFooter color="elegant-color" className="font-small pt-3">
			<div className='container-fluid'>
				<div className='row'>
					<div className="col-lg-5 col-xl-5">
						<h5 className="font-weight-bold">Live WifiSlax</h5>
						<p>
							Pagina Web que muestra una descripción general del sistema
							operativo Live WifiSlax, historia, pasos de instalacion,
							links de descarga para diferentes versiones y tutoriales de
							instalacion y uso.
            			</p>
					</div>

					<div className="col-sm-6 col-md-4 col-lg-2 col-xl-2">
						<h5 className="font-weight-bold">Otros Enlaces</h5>
						<ul>
							{
								this.props.links.map((link, i) => {
									return <li key={i} style={{ listStyleType: 'none' }}>
										<i className="fa fa-angle-right mr-1" />
										<a
											href={link.href}
											target='_blank'
											rel='noopener noreferrer'
										>{link.text}</a>
									</li>
								})
							}
						</ul>
					</div>

					<div className='col-sm-6 col-md-4 col-lg-2 col-xl-2'>
						<h5 className="font-weight-bold">Información de Contacto</h5>
						<ul>
							<li style={{ listStyleType: 'none' }}>
								<i className="fa fa-envelope mr-1" />
								<strong>E-mail: </strong>
								<a
									href="mailto: live.wifislax@gmail.com"
									target='_blank'
									rel='noopener noreferrer'
								>live.wifislax@gmail.com</a>
							</li>
						</ul>
					</div>

					<div className="col-md-4 col-lg-3 col-xl-3">
						<h5 className="font-weight-bold">Herramientas Utilizadas</h5>
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
										<a
											href={iconLink.href}
											target='_blank'
											rel='noopener noreferrer'
										>{iconLink.text}</a>
									</li>
								})
							}
						</ul>
					</div>

				</div>
			</div>

			<div className="footer-copyright text-center py-3 elegant-color-dark">
				<div className='containter-fluid m-0 p-0'>
					<img className='mr-1' src={github} width='17' alt='github-logo' />
					Repositorio en Github:
					<a
						href="https://github.com/alejo-castrillon/live-wifislax"
						target='_blank'
						rel='noopener noreferrer'
					> live-wifislax.git</a>
				</div>
			</div>
		</MDBFooter>
	}
}
