import React, { Component } from 'react'

import banner from './images/banner.png'

import TabbedNavbar from './components/TabbedNavbar'
import ContentPages from './components/ContentPages'
import SideLinksPage from './components/SideLinksPage'

import CommentForm from './components/comments/CommentForm'
import CommentListContainer from './components/comments/CommentListContainer'
import FooterPage from './components/FooterPage'

import Start from './components/content/Start'
import History from './components/content/History'
import Instalation from './components/content/Instalation'
import Versions from './components/content/Versions'

import menuLinks from './data/menu-links.json'
import icons from './data/icons.json'

export default class App extends Component {
	state = { activeTab: '1', comments: [] }
	database = window.firebase.database()

	handleToggleTab = tab => {
		if (this.state.activeTab !== tab)
			this.setState({ activeTab: tab })
	}

	getDate = date => {
		let time = date.toLocaleTimeString().toLowerCase()
		let day = date.getDate()
		let month = date.getMonth() + 1
		let year = date.getYear() + 1900
		date = ``

		let array = date.split

		array = time.split(':')

		let hour = parseInt(array[0])
		let foo = ' a. m.'
		while (hour > 12) {
			foo = ' p. m.'
			hour -= 1
		}

		return `${day}/${month}/${year}, ${hour}:${array[1]}${foo}`
	}

	handleAddComment = comment => {
		const key = this.database.ref('posted/').push().key
		let object = {}

		object[key] = {
			id: key,
			date: this.getDate(new Date()),
			username: comment.username,
			content: comment.content,
		}
		try {
			this.database.ref('posted/').update(object)
		} catch (error) {
			console.log(error)
		}
	}

	handleCommentReply = (path, reply) => {
		const key = this.database.ref(path).push().key
		let object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: reply.username,
			content: reply.content,
		}
		try {
			this.database.ref(path).update(object)
		} catch (error) {
			console.log(error)
		}
	}

	handleCommentReport = comment => {
		this.database.ref(`reported/${comment.id}`).set(comment)
	}

	componentDidMount = () => {
		this.database.ref('posted/').on('value', snap => {
			const currentComments = snap.val()
			if (currentComments !== null) {
				const newComments = Object.keys(currentComments).map(key => currentComments[key])
				this.setState({ comments: newComments })
			}
		})
	}

	render() {
		return <div>
			<header>
				<div className='text-center'>
					<img src={banner} alt='banner' style={{ width: '60%' }} />
				</div>
				<TabbedNavbar
					image='https://raw.githubusercontent.com/alejo-castrillon/live-wifislax/master/src/images/logo.png'
					title='Live WifiSlax'
					activeTab={this.state.activeTab}
					contentTabs={['Inicio', 'Historia', 'Guia Instalación', 'Versiones']}
					linkTabs={[
						{
							title: 'Foro',
							href: 'https://foro.seguridadwireless.net/live-wifislax/',
							tooltip: 'SeguridadWireless.net'
						}
					]}
					onToggleTab={this.handleToggleTab}
				/>
			</header>

			<section className='container-fluid'>
				<div className='row mx-xl-5'>
					<div className='m-0 p-0 col-lg-10 col-xl-10'>
						<ContentPages
							activeTab={this.state.activeTab}
							pages={[<Start />, <History />, <Instalation />, <Versions />]}
						/>

						<div className='alert alert-info mx-2 mt-2'>
							<p>
								Gracias por visitar nuestra pagina, deja un
								comentario para ayudarnos a mejorar. Tambien
								puedes responder a otros usuarios.
							</p>
							<p>
								En el caso de que quieras editar o eliminar
								alguno de tus comentarios contacta con
								nosotros.
							</p>
							<p>Recuerda no usar lenguaje inapropiado.</p>
						</div>

						<div className='row m-0 p-0 pb-md-3 pb-lg-3 pb-xl-3'>
							<div className='pt-2 border-right col-md-5 col-lg-5 col-xl-5'>
								<CommentForm
									title='Publicar Comentario'
									tooltip='Publicar el Comentario'
									button='Publicar'
									onAddComment={this.handleAddComment}
								/>
							</div>
							<div className='border-left col-md-7 col-lg-7 col-xl-7'>
								<CommentListContainer
									initialPath='posted'
									comments={this.state.comments}
									onCommentReply={this.handleCommentReply}
									onCommentReport={this.handleCommentReport}
								/>
							</div>
						</div>
					</div>

					<div className='elegant-color-dark m-0 p-0 col-lg-2 col-xl-2'>
						<SideLinksPage menus={menuLinks} />
					</div>
				</div>
			</section>

			<FooterPage links={[
				{
					text: 'Pagina Principal de Live WifiSlax',
					href: 'https://www.wifislax.com'
				},
				{
					text: 'Foro Principal del Sistema Operativo',
					href: 'https://foro.seguridadwireless.net/live-wifislax/'
				}
			]} iconsLinks={icons} />
		</div>
	}
}
