import React, { Component } from 'react'

import banner from './images/banner.png'

import reactjs from './images/reactjs.png'
import mdbreact from './images/bootstrap.png'
import ghpages from './images/github-lg.png'
import firebase from './images/firebase.png'

import './App.css'

import StartContent from './components/content/Start'
import HistoryContent from './components/content/History'
import InstalationContent from './components/content/Instalation'

import NavbarPage from './components/navbar-page'
import Article from './components/article'
import CommentForm from './components/comment-form'
import Comment from './components/comment'
import FooterPage from './components/footer-page'

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
				<img src={banner} className='App-banner' alt='banner' />¿
				<NavbarPage tabsContent={
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
			<FooterPage imageLinks={
				[
					{
						src: 'https://github.com/alejo-castrillon/live-wifislax/blob/react-structure/src/images/react.png?raw=true',
						alt: 'reactjs-logo',
						href: 'https://es.reactjs.org/',
						text: 'React.js'
					}, {
						src: 'https://github.com/alejo-castrillon/live-wifislax/blob/react-structure/src/images/mdbreact.png?raw=true',
						alt: 'mdbreact-logo',
						href: 'https://mdbootstrap.com/docs/react/',
						text: 'Material Design Bootstrap React'
					}, {
						src: 'https://github.com/alejo-castrillon/live-wifislax/blob/react-structure/src/images/github-lg.png?raw=true',
						alt: 'github-logo',
						href: 'https://pages.github.com/',
						text: 'Github Pages'
					}, {
						src: 'https://github.com/alejo-castrillon/live-wifislax/blob/react-structure/src/images/firebase.png?raw=true',
						alt: 'firebase-logo',
						href: 'https://firebase.google.com/products/realtime-database/',
						text: 'Firebase Realtime Database'
					},
				]
			} />
		</div>
	}
}
