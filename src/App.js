import React, { Component } from 'react'

import banner from './images/banner.png'
import reactLogo from './images/react.png'
import bootstrapLogo from './images/bootstrap.png'
import githubPagesLogo from './images/gh-pages-dk.png'
import firebaseGif from './images/firebase.png'

import './App.css'

import StartContent from './components/content/Start'
import HistoryContent from './components/content/History'
import InstalationContent from './components/content/Instalation'

import NavBar from './components/NavBar'
import CommentForm from './components/CommentForm'
import Article from './components/Article'
import Comment from './components/Comment'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			comments: []
		}
		this.handleAddComment = this.handleAddComment.bind(this)
	}

	handleAddComment = (comment) => {
		var key = window.firebase.database().ref('comments/').push().key
		var object = {}

		object[key] = {
			id: key,
			username: comment.username,
			text: comment.text,
			replies: [],
			valid: true
		}
		window.firebase.database().ref('comments/').update(object)
	}

	componentDidMount = () => {
		window.firebase.database().ref('comments/').on('value', snap => {
			const currentComments = snap.val()
			if (currentComments !== null) {
				this.setState({ comments: currentComments })
			}
		})
	}

	render() {
		const comments = Object.keys(this.state.comments).map((key, i) => {
			const comment = this.state.comments[key]
			return <Comment key={comment.id} comment={comment} />
		});

		return <div className="App">
			<header className="App-header">
				<img src={banner} className='App-banner' alt='banner' />
				<NavBar tabsContent={
					[
						{ title: 'Inicio', content: StartContent },
						{ title: 'Historia', content: HistoryContent },
						// { 'Versiones': VertionsContent },
						{ title: 'Guia Instalacion', content: InstalationContent },
					]
				} linkItem={{ 'Foro': 'https://foro.seguridadwireless.net/' }} />
			</header>

			<section className='Middle-sectino'>
				<div className='Content-pane'>
					<StartContent />
				</div>
				<div className='bg-dark text-white'>
					<Article />
				</div>
			</section>

			<hr />
			<footer className='Comments-pane'>
				<h4>{comments.length} Comentario{comments.length === 1 ? '' : 's'}</h4>
				<CommentForm onAddComment={this.handleAddComment} />
				<hr />
				<ul>{comments}</ul>
			</footer>
			<hr />
			<footer className='Footer clearfix p-5'>
				<a className='float-left' href='https://github.com/alejo-castrillon/live-wifislax'>
					Ver repositorio en GitHub
				</a>
				<div className='float-right'>
					<a href='https://es.reactjs.org/'>
						<img
							src={reactLogo}
							className='Spinning-logo Logo'
							alt="react"
						/>
					</a>
					<a href='https://getbootstrap.com/'>
						<img
							src={bootstrapLogo}
							className='Logo'
							alt="bootstrap"
						/>
					</a>
					<a href='https://pages.github.com/'>
						<img
							src={githubPagesLogo}
							className='Logo'
							alt="github-p"
						/>
					</a>
					<a href='https://firebase.google.com/'>
						<img
							src={firebaseGif}
							className='Logo'
							alt="firebase"
						/>
					</a>
				</div>
			</footer>
		</div>
	}
}
