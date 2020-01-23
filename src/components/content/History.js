import React, { Component } from 'react'

export default class HistoryContent extends Component {
	render() {
		return <div className='text-justify px-3 pt-2'>
			<h1 className='text-muted font-weight-bold'>HISTORIA</h1>
			<p>
				Wifislax es la evolución de Wifiway (el cual a su vez se basaba en
				SlackWare) que fue creada en un foro por los usuarios que por
				aquel entonces pertenecían a <strong>SeguridadWireleess.net</strong>
				, la primera base de wifiway no se quien la compilo, imagino que
				seria Hwagm y/o quizás Umbas y el resto de usuarios (gente de
				desarrollo, cifrados y demás ) fueron creando y migrando script de
				otras plataformas, esto fue por el 2006.
			</p>
			<p>
				Por el 2009 se empezó a dar un desarrollo mas fuerte y salio la
				ultima versión de WifiWay que ya contenía soporte para los chips
				Atheros, en esa fecha también se registro en el foro USUARIONUEVO,
				que hoy es el encargado del desarrollo y mantenimiento de la actual
				Wfislax.
			</p>
			<p>
				El nombre proviene de su base y su función Wifi por ser una
				distribución pensada para el estudio y penetración de redes Wireless
				y Slax por estar basada en esta base Gnu/linux.
			</p>
			<p>
				Se puede decir que se deriva del inicio de varios desarrollos sin
				éxito de otras distribuciones como Knoppix, Debian y finalmente Slax.
				Después de un largo trabajo se logró reutilizar funcionalidades de
				antiguas versiones de BackTrack, debido a que esta última nace de la
				unión de dos grandes distribuciones orientadas a la seguridad, el
				Auditor y WHAX.
			</p>
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