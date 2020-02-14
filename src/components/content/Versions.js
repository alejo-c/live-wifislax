import React, { Component } from 'react'

import image1 from '../../images/versions1.jpg'

export default class VersionsContent extends Component {
	render() {
		return <div className='text-justify px-3 pt-2 lead'>
			<h1 className='text-muted font-weight-bold'>VERSIONES</h1>
			<p>
				Live Wifislax presenta a todos aquellos interesados en el hacking
				etico diferentes versiones disponibles para equipos con
				arquitecturas de 32 y 64 bits que por 13 años los usuarios del
				foro se han proporcionado junto a numerosos paquetes y
				herramientas destinadas principalmente a la auditoria de redes
				inalambricas.
			</p>
			<div className='text-center mb-3 mx-md-5'>
				<img
					className='img-fluid'
					src={image1}
					alt='imagen'
					width='450px'
				/>
			</div>
			<p>
				Estas son algunas de las versiones de Live Wifislax que es
				posible encontrar:
			</p>

			<strong>Diseñados para arquitectura de 32 bits</strong>
			<ul>
				<li>Wifislax 3.0</li>
				<li>Wifislax 4.1</li>
				<li>Wifislax 4.2</li>
				<li>Wifislax 4.3</li>

				<li>Wifislax 4.4</li>
				<li>Wifislax 4.5</li>
				<li>Wifislax 4.6</li>
				<li>Wifislax 4.7</li>
				<li>Wifislax 4.7.1</li>
				<li>Wifislax 4.7.2</li>

				<li>Wifislax 4.8 [Linset]</li>
				<li>Wifislax 4.9 [Linset]</li>

				<li>Wifislax 4.10.1 [Linset]</li>
				<li>Wifislax 4.11 [Linset]</li>
				<li>Wifislax 4.11.1 [Linset/Pixiescript]</li>
				<li>Wifislax 4.12 [Linset/Pixiescript]</li>
			</ul>

			<strong>Diseñados para arquitectura de 64 bits</strong>
			<ul>
				<li>Wifislax64 1.0 [Linset/Pixiescript]</li>
				<li>Wifislax64 1.1 [Linset/Pixiescript/Hashcat]</li>
				<li>Wifislax64 2.0 [Linset/Pixiescript/Hashcat]</li>
			</ul>


			<strong>Linset:</strong>
			<p>
				Linset es una aplicación para Linux que nos permite auditar o
				crackear una red Wi-Fi para comprobar la seguridad de su clave
				fácilmente sin necesidad de diccionarios de caves ya que será el
				propio dueño de la red quien nos facilitará la clave.
			</p>

			<strong>Pixiescript:</strong>
			<p>
				Permite atacar de forma automática todos los puntos de acceso
				al alcance, asimismo también permite atacar un sólo punto de
				acceso. Además este script es capaz de detectar y cerrar procesos
				en el ordenador que interfieran a la hora de utilizar la tarjeta
				en modo monitor.
			</p>

			<strong>Hashcat:</strong>
			<p>
				Hashcat es una aplicación que permite la recuperación de las
				contraseñas, a partir del valor del hash para cada una de ellas.
				Si se tiene en cuenta el hecho de que éstas no suelen almacenarse
				como texto plano en la base de datos, sino como su hash, esta
				herramienta provee diversos métodos para la recuperación.
			</p>
		</div>
	}
}