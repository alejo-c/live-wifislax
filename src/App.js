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
		this.state = { comments: [], loading: false }
	}

	handleAddComment = (comment) => {
		var key = window.firebase.database().ref('comments/').push().key
		var object = {}

		object[key] = {
			id: key,
			date: new Date().toLocaleString(),
			username: comment.username,
			content: comment.content,
			replies: [],
		}
		try {
			window.firebase.database().ref('comments/').update(object)
		} catch (error) {
			console.log('error: ' + error)
		}
	}

	componentDidMount = () => {
		this.setState({ loading: true })
		window.firebase.database().ref('comments/').on('value', snap => {
			const currentComments = snap.val()
			if (currentComments !== null) {
				this.setState({ comments: currentComments })
			}
		})
	}

	render() {
		const comments = Object.keys(this.state.comments).map(key => {
			return this.state.comments[key]
		});

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
						comments={comments}
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