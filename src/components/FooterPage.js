import React, { Component } from "react"
import { MDBFooter } from "mdbreact"

import github from '../images/github.png'

import './icon.css'

export default class FooterPage extends Component {
	render() {
		return <MDBFooter color="elegant-color" className="font-small pt-3">
			<div className='container-fluid mx-lg-5'>
				<div className='row mx-lg-5'>
					<div className="col-xl-5">
						<div className="h5 font-weight-bold">Live WifiSlax</div>
						<p>
							Pagina Web que muestra una descripción general del sistema
							operativo Live WifiSlax, historia, pasos de instalacion,
							links de descarga para diferentes versiones y tutoriales de
							instalacion y uso.
            			</p>
					</div>

					<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
						<div className="h5 font-weight-bold">Enlaces</div>
						<div className='ml-3 mb-3'>
							{
								this.props.links.map((link, i) =>
									<div key={i} style={{ listStyleType: 'none' }}>
										<i className="fa fa-angle-right mr-1" />
										<a
											href={link.href}
											target='_blank'
											rel='noopener noreferrer'
										>{link.text}</a>
									</div>
								)
							}
						</div>
					</div>

					<div className='col-sm-6 col-md-4 col-lg-4 col-xl-2'>
						<div className="h5 font-weight-bold">Información de Contacto</div>
						<div className='ml-3 mb-3' style={{ listStyleType: 'none' }}>

							<strong><i className="fa fa-envelope mr-1" />E-mail: </strong>
							<a
								href="mailto: live.wifislax@gmail.com"
								target='_blank'
								rel='noopener noreferrer'
							>live.wifislax@gmail.com</a>
						</div>
					</div>

					<div className="col-md-4 col-lg-4 col-xl-3">
						<h5 className="font-weight-bold">Herramientas Utilizadas</h5>
						<div className='ml-4 mb-2'>
							{
								this.props.iconsLinks.map((iconLink, i) => {
									let spinning = iconLink.spinning === true ? 'Spinning-icon' : ''
									return <div className='Icon list-unstyled' key={i}>
										<a
											href={iconLink.href}
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												className={`py-1 mr-${iconLink.mr} ` + spinning}
												src={iconLink.src}
												width={iconLink.size}
												alt={iconLink.alt}
											/>
											{iconLink.text}
										</a>
									</div>
								})
							}
						</div>
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
