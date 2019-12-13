import React, { Component } from 'react'

import banner from './images/banner.png'

import ContentTabbedBar from './components/ContentTabbedBar'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import FooterPage from './components/FooterPage'

import icons from './data/logos.json'

export default class App extends Component {
	constructor() {
		super()
		this.state = { comments: [], loading: true }
	}

	handleAddComment = comment => {
		var key = window.firebase.database().ref('posted/').push().key
		var object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: comment.username,
			content: comment.content,
		}
		try {
			window.firebase.database().ref('posted/').update(object)
		} catch (error) {
			console.log('error: ' + error)
		}
	}

	handleCommentReply = comment => {
		var key = window.firebase.database().ref(`posted/${comment.id}/replies/`).push().key
		var object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: comment.username,
			content: comment.content,
		}
		try {
			window.firebase.database().ref(`posted/${comment.id}/replies/`).update(object)
			console.log('replied')
		} catch (error) {
			console.log('error: ' + error)
		}
	}

	handleCommentReport = comment => {
		window.firebase.database().ref(`reported/${comment.id}`).set(comment)
	}

	updateComments = snap => {
		const currentComments = snap.val()
		if (currentComments !== null) {
			const comments = Object.keys(currentComments).map(key => {
				var comment = currentComments[key]
				return comment
			})
			this.setState({ comments: comments })
		}
	}

	componentDidMount = () => {
		console.log('mounted')
		var posted = window.firebase.database().ref('posted/')
		posted.on('value', snap => {
			this.updateComments(snap)
			console.log('updated')
		})
		this.setState({ loading: false })
	}

	render() {
		console.log('rendered')
		return <div className="App">
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
					} linkTab={{ title: 'Foro', href: 'https://foro.seguridadwireless.net' }}
				/>
			</header>

			<hr />

			<div className="row">
				<div className="col-3 pt-3 border-right">
					<CommentForm onAddComment={this.handleAddComment} />
				</div>
				<div className="col-9 pt-3">
					<CommentList
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
					{ text: 'Foro Principal del Sistema Operativo', href: 'https://foro.seguridadwireless.net' }
				]
			} iconsLinks={icons} />
		</div >
	}
}
