import React, { Component } from 'react'
import { MDBContainer, MDBInput } from 'mdbreact'

import banner from './images/banner.png'

import TabbedNavbar from './components/TabbedNavbar'
import ContentTabs from './components/ContentTabs';
import SideLinksPage from './components/SideLinksPage'

import CommentForm from './components/CommentForm'
import CommentListContainer from './components/CommentListContainer'
import FooterPage from './components/FooterPage'

import menuLinks from './data/menu-links.json'
import icons from './data/icons.json'

export default class App extends Component {
	constructor() {
		super()
		this.state = { activeTab: '1', username: '', errorMessage: '', comments: [] }
		this.database = window.firebase.database()
	}

	handleToggleTab = tab => () => {
		if (this.state.activeTab !== tab)
			this.setState({ activeTab: tab })
	}

	handleChange = e => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	handleCommentError = message => {
		this.setState({ errorMessage: message })
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
			console.log(error)
		}
	}

	handleCommentReply = (path, reply) => {
		var key = this.database.ref(path).push().key
		var object = {}

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
			<header className='text-center'>
				<img src={banner} alt='banner' style={{ width: '60%' }} />
				<TabbedNavbar
					image='https://raw.githubusercontent.com/alejo-castrillon/live-wifislax/react-structure/src/images/logo.png'
					title='Live WifiSlax'
					activeTab={this.state.activeTab}
					contentTabs={
						[
							{ title: 'Inicio' },
							{ title: 'Historia' },
							{ title: 'Guia Instalación' },
							{ title: 'Versiones' },
						]
					}
					linkTabs={[{ title: 'Foro', href: 'https://foro.seguridadwireless.net/live-wifislax/' }]}
					onToggleTab={this.handleToggleTab}
				/>
			</header>

			<MDBContainer fluid>
				<div className='row'>
					<div className='col-10'>
						<ContentTabs activeTab={this.state.activeTab} />
						<div className='row my-2'>
							<div className='col-4 pt-2 border-right'>
								<small className={'badge badge-danger m-0 ' + (this.state.errorMessage ? 'visible' : 'invisible')}>
									{this.state.errorMessage} <i className="fas fa-exclamation-circle"></i>
								</small>
								<MDBInput
									className='my-0 mr-0 px-0 d-inline'
									name='username'
									value={this.state.username}
									onChange={this.handleChange}
									type='text'
									label='Nombre'
									icon='user'
								/>
								<hr />
								<CommentForm
									username={this.state.username}
									onAddComment={this.handleAddComment}
									onCommentError={this.handleCommentError}
								/>
							</div>
							<div className='col-8 pt-2'>
								<CommentListContainer
									username={this.state.username}
									comments={this.state.comments}
									onCommentReply={this.handleCommentReply}
									onCommentReport={this.handleCommentReport}
									onCommentError={this.handleCommentError}
								/>
							</div>
						</div>
					</div>

					<div className='col-2 elegant-color-dark px-0'>
						<SideLinksPage menus={menuLinks} />
					</div>
				</div>
			</MDBContainer>

			<FooterPage links={
				[
					{ text: 'Pagina Principal de Live WifiSlax', href: 'https://www.wifislax.com' },
					{ text: 'Foro Principal del Sistema Operativo', href: 'https://foro.seguridadwireless.net/live-wifislax/' }
				]
			} iconsLinks={icons} />
		</div>
	}
}
