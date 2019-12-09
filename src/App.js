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

import SideLinksPage from './components/SideLinksPage'

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
		const comments = Object.keys(this.state.comments).map(key => {
			return this.state.comments[key]
		});

		return <div className="App">
			<header className="text-center">
				<img src={banner} className='w-60' alt='banner' />
				<NavbarPage contentTabs={
					[
						{ title: 'Inicio', content: StartContent },
						{ title: 'Historia', content: HistoryContent },
						{ title: 'Guia Instalación', content: InstalationContent },
						{ title: 'Versiones', content: VertionsContent },
					]
				} linkTab={{ title: 'Foro', href: 'https://foro.seguridadwireless.net/' }} />
			</header>

			<section className='Middle-section row'>
				<div className='Content-pane col-10'>
					<StartContent />
				</div>
				<div className='bg-dark text-white col-2'>
					<SideLinksPage menus={
						[
							{title: 'Versiones', links: [
								{text:'1.1', href:'https://google.com'}
							]},
							{title: 'Tutoriales', links: [
								{text:'1.2', href:'https://google.com'}
							]}
						]	
					}/>
				</div>
			</section>

			<div className="row">
				<div className="col-4 pt-3 border-right">
					<CommentForm onAddComment={this.handleAddComment} />
				</div>
				<div className="col-8 pt-3">
					<CommentList
						loading={this.state.loading}
						comments={comments}
					/>
				</div>
			</div>

			<hr />
			<FooterPage iconsLinks={icons} />
		</div>
	}
}
