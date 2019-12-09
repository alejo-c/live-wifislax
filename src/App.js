import React, { Component } from 'react'

import banner from './images/banner.png'

import StartContent from './components/content/Start'
import HistoryContent from './components/content/History'
import VertionsContent from './components/content/Versions'
import InstalationContent from './components/content/Instalation'

import NavbarPage from './components/NavbarPage'

import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import FooterPage from './components/FooterPage'

import icons from './data/logos.json'

import CollapsePage from './components/CollapsePage'

export default class App extends Component {
	constructor() {
		super()
		this.state = { comments: [], loading: false }
		this.handleAddComment = this.handleAddComment.bind(this)
	}

	handleAddComment = (comment) => {
		var key = window.firebase.database().ref('comments/').push().key
		var object = {}

		object[key] = {
			id: key,
			username: comment.username,
			content: comment.content,
			replies: [],
			valid: true
		}
		console.log(comment)
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
		const comments = Object.keys(this.state.comments).map((key, i) => {
			return this.state.comments[key]
		});

		return <div className="App">
			<CollapsePage/>
			<header className="text-center">
				<img src={banner} className='w-100' alt='banner' />
				<NavbarPage contentTabs={
					[
						{ title: 'Inicio', content: StartContent },
						{ title: 'Historia', content: HistoryContent },
						{ title: 'Guia Instalación', content: InstalationContent },
						{ title: 'Versiones', content: VertionsContent },
					]
				} linkTab={{ title: 'Foro', href: 'https://foro.seguridadwireless.net/' }} />
			</header>

			<section className='Middle-sectino'>
				<div className='Content-pane'>
					<StartContent />
				</div>
				<div className='bg-dark text-white'>
				</div>
			</section>

			<hr />

			<div className="row">
				<div className="col-4 pt-3 border-right">
					<CommentForm onAddComment={this.handleAddComment} />
				</div>
				<div className="col-8 pt-3 bg-white">
					<CommentList
						loading={this.state.loading}
						comments={comments}
					/>
				</div>
			</div>

			<hr />
			<FooterPage imageLinks={icons} />
		</div>
	}
}
