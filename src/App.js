import React, { Component } from 'react'

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
		this.state = { activeTab: '1', comments: [] }
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

	handleAddComment = comment => {
		const key = this.database.ref('posted/').push().key
		let object = {}

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
				const newComments = Object.keys(currentComments).map(key => {
					return currentComments[key]
				})
				this.setState({ comments: newComments })
			}
		})
	}

	render() {
		return <div>
			<header>
				<div className='text-center'><img src={banner} alt='banner' style={{ width: '60%' }} /></div>
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

			<section className='container-fluid'>
				<div className='row'>
					<div className='col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10'>
						<ContentTabs activeTab={this.state.activeTab} />
						<div className='row my-2'>
							<div className='pt-2 border-right col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5'>
								<CommentForm
									onAddComment={this.handleAddComment}
								/>
							</div>
							<div className='pt-2 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7'>
								<CommentListContainer
									comments={this.state.comments}
									onCommentReply={this.handleCommentReply}
									onCommentReport={this.handleCommentReport}
								/>
							</div>
						</div>
					</div>

					<div className='elegant-color-dark m-0 p-0 col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'>
						<SideLinksPage menus={menuLinks} />
					</div>
				</div>
			</section>

			<FooterPage links={
				[
					{ text: 'Pagina Principal de Live WifiSlax', href: 'https://www.wifislax.com' },
					{ text: 'Foro Principal del Sistema Operativo', href: 'https://foro.seguridadwireless.net/live-wifislax/' }
				]
			} iconsLinks={icons} />
		</div>
	}
}
