import React, { Component } from "react";

import image1 from "../../images/start1.jpg";

export default class Start extends Component {
	// state = { width: 0 }
	// componentDidMount = () => {
	// 	React.useEffect(() => {
	// 		function handleResize() {
	// 			console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
	// 			window.addEventListener('resize', handleResize)
	// 		}
	// 	})
	// }
	render() {
		// console.log(this.state.width)
		return <div className='text-justify px-3 pt-2'>
			<h1 className='text-muted font-weight-bold'>SISTEMA OPERATIVO</h1>
			<p>
				WiFiSlax es una distribución <strong>GNU/Linux</strong> en
				formato *.iso con funcionalidades pensadas y diseñadas para la
				auditoría de seguridad y relacionada con la seguridad
				informática en general.
			</p>
			<p>
				Incluye una larga lista de herramientas de seguridad y
				auditoría listas para ser utilizadas, entre las que destacan
				numerosos escáner e puertos y vulnerabilidades, herramientas
				para creación y diseño de exploits, sniffers, herramientas de
				análisis forense y herramientas para la <strong>auditoría
				wireless</strong>.
			</p>
			<div className='text-center mb-3 mx-md-5'>
				<img
					className='img-fluid'
					src={image1}
					alt='imagen'
				/>
			</div>
			<p>
				Posee una gran integración de varios controladores de red no
				oficiales en el kernel de Linux, y da así soporte inmediato para un
				gran número de tarjetas de red cableadas e inalámbricas.
			</p>
			<p>
				Esta suite de seguridad se basa en la distribución <strong>
					Linux Slackware</strong> y viene de base con una gran colección
de herramientas de seguridad y auditoría, tanto para comprobar
la seguridad de las redes Wi-Fi como de otros aspectos de una
red, como los puertos y su protección contra diferentes
exploits, entre otros.
			</p>
			<p>
				A pesar de que existen otras distribuciones de hacking ético en
				la red (como <strong>Kali Linux</strong>, <strong>BackBox
				</strong> o <strong>Parrot Security OS</strong>), Wifislax
				sigue teniendo a día de hoy un importante público, sobre todo
				entre los usuarios que hace tiempo utilizaron esta suite y se
				hicieron a ella, ya que, aunque puede no ser la más sencilla de
				utilizar, es de las más completas para auditar todo tipo de
				redes, en especial redes Wi-Fi.
			</p>
		</div>
	}
}