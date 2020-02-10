import React, { Component } from 'react'

export default class VersionsContent extends Component {
	render() {
		return <div className='text-justify px-3 pt-2'>
			<h1 className='text-muted font-weight-bold'>VERSIONES</h1>
			<ul>
				<li>WifiSlax 1.2</li>
				<li>WifiSlax 2.0</li>

				<li>WifiSlax 4.4</li>
				<li>WifiSlax 4.5</li>
				<li>WifiSlax 4.6</li>
				<li>WifiSlax 4.7</li>

				<li>WifiSlax 4.8 [Linset]</li>
				<li>WifiSlax 4.9 [Linset]</li>

				<li>Wifislax 4.10.1 [Linset]</li>
				<li>WifiSlax 4.11 [Linset]</li>
				<li>WifiSlax 4.11.1 [Linset/Pixiescript]</li>
				<li>WifiSlax 4.12 [Linset/Pixiescript]</li>
			</ul>

			<strong>Linset:</strong>
			<p>
				Linset es una aplicación para Linux que nos permite auditar o
				crackear una red Wi-Fi para comprobar la seguridad de su clave
				fácilmente sin necesidad de diccionarios de caves ya que será el
				propio dueño de la red quien nos facilitará la clave.
				</p>

			<br />

			<strong>Pixiescript:</strong>
			<p>
				Permite atacar de forma automática todos los puntos de acceso
				al alcance, asimismo también permite atacar un sólo punto de
				acceso. Además este script es capaz de detectar y cerrar procesos
				en el ordenador que interfieran a la hora de utilizar la tarjeta
				en modo monitor.
			</p>
		</div>
	}
}