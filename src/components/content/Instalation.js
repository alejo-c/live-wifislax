import React, { Component } from 'react'

import image1 from "../../images/install1.jpg";
import image2 from "../../images/install2.png";
import image3 from "../../images/install3.png";


export default class Instalation extends Component {
	render() {
		return <div className='text-justify px-3 pt-2'>
			<h1 className='text-muted font-weight-bold'>INSTALACIÓN</h1>
			<ol>
				<li>
					Descargar el archivo *.iso correspondiente a la
					arquitectura de tu equipo
				</li>
				<li>
					Inicializar el sistema operativo usando el <em>Boot </em>
					desde la BIOS del computador o mediante
						<a
						href='https://www.virtualbox.org/'
						target='_blank'
						rel='noopener noreferrer'
					> VirtualBox</a>.
				</li>

				<li>Elejir la opcion de arranque que prefieras. Estas opciones
					cambiaran con respecto a cada version del sistema
					operativo.
					<br />
					Ten en cuenta los requerimientos de tu equipo.
				</li>

				<div className='text-center my-3 mx-md-5'>
					<img
						className='img-fluid'
						src={image1}
						alt='imagen'
						width='450px'
					/>
				</div>

				<li>Elegir el idioma de preferencia.</li>

				<div className='text-center my-3 mx-md-5'>
					<img
						className='img-fluid'
						src={image2}
						alt='imagen'
						width='450px'
					/>
				</div>

				<li>
					En el caso de <em>bootear</em> el sistema operativo sera
					necesario finalizar la instalacion con el programa
						<br />
					<code>
						Sistema > Instalacion de Wifislax > Wifislax Installer GUI
						</code>
				</li>

				<div className='text-center my-3 mx-md-5'>
					<img
						className='img-fluid'
						src={image3}
						alt='imagen'
						width='450px'
					/>
				</div>
			</ol>
		</div>
	}
}