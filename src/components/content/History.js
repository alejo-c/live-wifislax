import React, { Component } from 'react'

import image1 from "../../images/history1.png";

export default class HistoryContent extends Component {
	render() {
		return <div className='text-justify px-3 pt-2'>
			<h1 className='text-muted font-weight-bold'>HISTORIA</h1>
			<p>
				Algunos usuarios que eranEl hacia de moderador en una web llamada hwagm.elhacker.net en ella conoció a gente y barajaron la posibilidad de crear una web enfocada a las redes wifi. Creo su propio dominio y la llamo seguridadwireless.net Finalmente debido a las necesidades que habían tenido los miembros de la comunidad se vio la necesidad de diseñar su propio live CD (Wifilax 1.0) y tras el gran éxito la creación de su dominio wifislax.com que a sido necesario para dedicarlo exclusivamente a esta herramienta
			</p>
			<p>
				Wifislax es la evolución de <strong>Wifiway</strong> (el cual a
				su vez se basaba en <strong>SlackWare</strong>) que fue creada
				en el foro
				<a
					href='https://foro.seguridadwireless.net/live-wifislax/'
					target='_blank'
					rel='noopener noreferrer'
				> SeguridadWireleess.net </a>
				por los usuarios que pertenecen a él, los cuales fueron
				produciendo y migrando scripts desde otras plataformas hasta la
				primera versión liberada en el 2006.
			</p>
			<p>
				Por el 2009 se empezó a dar un desarrollo mas fuerte y salio la
				ultima versión de <strong>WifiWay</strong>, en esa fecha
				también se registro en el foro <strong>USUARIONUEVO</strong>,
				que hoy es el encargado del desarrollo y mantenimiento de la
				actual Wifislax.
			</p>
			<div className='text-center mb-3'>
				<img className='image' src={image1} width="600px" alt='imagen' />
			</div>
			<p>
				El nombre proviene de su base y su función Wifi por ser una
				distribución pensada para el estudio y penetración de redes Wireless
				y Slax por estar basada en esta base GNU/linux.
			</p>
			<p>
				Se puede decir que se deriva del inicio de varios desarrollos
				sin éxito de otras distribuciones como<strong>Knoppix
				</strong>, <strong>Debian</strong> y finalmente <strong>Slax
				</strong> en el ambito de la auditoria de redes inalambricas.
				Después de un largo trabajo se logró reutilizar funcionalidades
				de antiguas versiones de <strong>BackTrack</strong>, debido a
				que esta última nace de la unión de dos grandes distribuciones
				orientadas a la seguridad, el <strong>Auditor</strong> y
				<strong>WHAX</strong>.
			</p>
		</div>
	}
}