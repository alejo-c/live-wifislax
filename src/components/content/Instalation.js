import React, { Component } from 'react'

import image1 from "../../images/install1.jpg";
import image2 from "../../images/install2.png";
import image3 from "../../images/install3.png";


export default class Instalation extends Component {
	render() {
		return <div className='text-justify px-3 pt-2 lead'>
			<h1 className='text-muted font-weight-bold'>INSTALACIÓN</h1>

			<div>
				Los requisitos mínimos de esta distribución son:
				<ul>
					<li>
						<code>512MB de RAM</code> si se utilizara en Modo Live.
					</li>
					<li>
						<code>1GB de RAM</code> si se instalara en el disco
						duro.
					</li>

					<li>
						Respecto al requisito de <code>disco duro </code>
						necesita como máximo <code>10GB</code> para que
						funcione todo correctamente.
					</li>
				</ul>
			</div>

			<h2 className='text-muted font-weight-bold'>Pasos de Instalación</h2>
			<ol>
				<li className='lead mb-3'>
					<div>
						Descargar el archivo *.iso <code>[Última versión]</code>.
					</div>

					<a
						href='https://mega.nz/#!Wkw0zACC!XGvsBcTQj9Jc3zM1UcdWhKLMP_YEJuyWXm_28pDWny4'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div
							className='btn btn-info'
							data-toggle="tooltip"
							title="Descargar ultima versión"
						>Descargar</div>
					</a>

					<div>
						Tambien puedes acceder a la seccion de versiones en el
						caso de estar buscando otra version del sistema
						operativo.
					</div>
				</li>

				<li>
					Inicializar el sistema operativo usando el <em>Boot </em>
					desde la BIOS del computador o mediante
						<a
						href='https://www.virtualbox.org/'
						target='_blank'
						rel='noopener noreferrer'
					> <code>VirtualBox</code></a>.
				</li>

				<li>
					<div>
						Elejir la opcion de arranque que prefieras. Estas opciones
						cambiaran con respecto a cada version del sistema
						operativo.
					</div>
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
					necesario finalizar la instalacion con el programa.
						<br />
					<code>
						Sistema > Instalacion de Wifislax > Wifislax Installer GUI.
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

				<h2 className='text-muted font-weight-bold'>Tutoriales</h2>

				<div className='lead3'>
					También puedes ver estos videos para seguir los pasos.
				</div>

				<h3 className='text-muted font-weight-bold my-3'>Con VirtualBox</h3>

				<div className='text-center'>
					<iframe
						title='Instalation with VirtualBox'
						width="560"
						height="315"
						src="https://www.youtube.com/embed/pP8OZ0ijRcA?start=59"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</div>


				<h3 className='text-muted font-weight-bold my-3'>
					En el Disco Duro con Rufus
				</h3>

				<div className='text-center'>
					<iframe
						title='Instalation with Rufus'
						width="560"
						height="315"
						src="https://www.youtube.com/embed/zkwBwexAj5k?start=12"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</div>
			</ol>
		</div>
	}
}