import React, { Component } from 'react'

import banner from './images/banner.png'

import ContentTabbedBar from './components/ContentTabbedBar'
import CommentForm from './components/CommentForm'
import CommentListContainer from './components/CommentListContainer'
import FooterPage from './components/FooterPage'

import icons from './data/icons.json'

export default class App extends Component {
	constructor() {
		super()
		this.state = { comments: [], loading: true }
		this.database = window.firebase.database()
	}

	handleAddComment = comment => {
		var key = this.database.ref('posted/').push().key
		var object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: comment.username,
			content: comment.content,
		}
		try {
			this.database.ref('posted/').update(object)
		} catch (error) {
			console.log('error: ' + error)
		}
	}

	handleCommentReply = (comment, reply) => {
		var key = this.database.ref(`posted/${comment.id}/replies/`).push().key
		var object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: reply.username,
			content: reply.content,
		}
		try {
			this.database.ref(`posted/${comment.id}/replies/`).update(object)
		} catch (error) {
			console.log('error: ' + error)
		}
	}

	handleCommentReport = comment => {
		this.database.ref(`reported/${comment.id}`).set(comment)
	}

	componentDidMount = () => {
		this.database.ref('posted/').on('value', snap => {
			var currentComments = snap.val()
			if (currentComments !== null) {
				var newComments = Object.keys(currentComments).map(key => {
					return currentComments[key]
				})
				this.setState({ comments: newComments })
			}
		})
		this.setState({ loading: false })
	}

	render() {
		return <div>
			<header className="text-center">
				<img src={banner} alt='banner' />
				<ContentTabbedBar
					image='https://raw.githubusercontent.com/alejo-castrillon/live-wifislax/react-structure/src/images/logo.png'
					title='Live WifiSlax'
					contentTabs={
						[
							{ title: 'Inicio' },
							{ title: 'Historia' },
							{ title: 'Guia Instalación' },
							{ title: 'Versiones' },
						]
					} linkTab={{ title: 'Foro', href: 'https://foro.seguridadwireless.net/live-wifislax/' }}
				/>
			</header>

			<div className="row">
				<div className="col-3 pt-3 border-right">
					<CommentForm
						title="Publica un Comentario"
						action='Publicar'
						onAddComment={this.handleAddComment}
					/>
				</div>
				<div className="col-9 pt-3">
					<CommentListContainer
						loading={this.state.loading}
						comments={this.state.comments}
						onCommentReply={this.handleCommentReply}
						onCommentReport={this.handleCommentReport}
					/>
				</div>
			</div>

			<FooterPage links={
				[
					{ text: 'Pagina Principal de Live WifiSlax', href: 'https://www.wifislax.com' },
					{ text: 'Foro Principal del Sistema Operativo', href: 'https://foro.seguridadwireless.net/live-wifislax/' }
				]
			} iconsLinks={icons} />
		</div >
	}
}
