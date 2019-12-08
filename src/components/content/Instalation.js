import React, { Component } from 'react'

export default class Instalation extends Component {
	render() {
		return <div>
			<ol>
				<li>Descarga el archivo *.iso correspondiente a la version del sistema operativo.</li>
				Usando el BOOT desde el computador o mediante un emulador como
				<a href="https://www.virtualbox.org/" target="blank" alt='image0'>VirtualBox</a>

				<br /><br />
				<li>Elije la opcion de arranque que prefieras.</li>
				Estas opciones cambiaran con respecto a cada version del sistema operativo.

				<br />
				Ten en cuenta los requerimientos de tu equipo.

				<br /><br />

				<div class="image">
					<img src="images/install1.jpg" width="500px" alt='image1' />
				</div>

				<br />
				<li>Luego elije el idioma de tu preferencia.</li>
				<br />

				<div class="image">
					<img src="images/install2.png" width="500px" alt='image2' />
				</div>

				<br />
				Y ya estas listo para disfrutar con Live WifiSlax!.
			</ol>
		</div>
	}
}