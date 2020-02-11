import React, { Component } from 'react'
import { MDBCollapse } from 'mdbreact'

import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default class Comment extends Component {
	state = { replies: [], collapseReplies: '', collapseForm: '', reported: false }

	handleCommentReply = reply => {
		this.props.onCommentReply(
			`${this.props.path}/${this.props.comment.id}/replies/`, reply)
		this.setState({ collapseReplies: 'replies' })
	}

	handleCommentReport = () => {
		this.props.onCommentReport(this.props.comment)
		this.setState({ reported: true })
	}

	toggleCollapseForm = collapseForm => () => {
		this.setState(prevState => ({
			collapseForm:
				prevState.collapseForm !== collapseForm ? collapseForm : ''
		}))
	}

	toggleCollapseReplies = collapseReplies => () => {
		this.setState(prevState => ({
			collapseReplies:
				prevState.collapseReplies !== collapseReplies ?
					collapseReplies : ''
		}))
	}

	render() {
		let { username, content, date } = this.props.comment
		content = content.split('\n').map(
			(line, i) => <div key={i}>{line}<br /></div>
		)

		let replies
		let count
		if (this.props.comment.replies === undefined) {
			replies = []
			count = 0
		} else {
			replies = Object.keys(this.props.comment.replies)
				.map(key => this.props.comment.replies[key])
			count = replies.length
		}
		let image = `https://api.adorable.io/avatars/44/${username}@adorable.io.png`

		return <div className='mb-1'>
			<div className='media'>
				<img className='mr-1 rounded' src={image} alt={username} />
				<div className='media-body p-2 shadow-sm rounded bg-light border'>
					<small className='float-right text-muted'>{date}</small>
					<div className='h6 mr-2'><strong>{username}</strong></div>
					{content}
				</div>
			</div>
			<div>
				<button
					className='btn btn-primary ml-0 ml-sm-5 py-1 px-2'
					onClick={this.toggleCollapseForm('reply-form')}
					data-toggle="tooltip"
					title="Publicar Respuesta"
				>
					<i className='fa fa-comment-alt' />
					<i className={
						'ml-1 fas fa-chevron-' + (this.state.collapseForm === 'reply-form' ? 'up' : 'down')
					} />
				</button>

				<button
					className='btn btn-warning ml-sm-4 py-1 px-1'
					onClick={this.toggleCollapseReplies('replies')}
					data-toggle="tooltip"
					title="Ver Respuestas"
				>
					{count}
					<i className="fas fa-comments ml-1" />
					<i className={
						'ml-1 fas fa-chevron-' + (this.state.collapseReplies === 'replies' ? 'up' : 'down')
					} />
				</button>

				<button
					className='btn btn-danger ml-sm-4 py-1 px-2'
					onClick={this.handleCommentReport}
					data-toggle="tooltip"
					title="Reportar Comentario"
				>
					<i className='fa fa-flag' />
				</button>

				<span className={'badge badge-info ml-1 ' + (this.state.reported ? '' : 'd-none')}>
					Comentario reportado <i className='fa fa-check-circle' />
				</span>
			</div>

			<div className='pl-sm-5'>
				<div className='pl-3 pl-sm-2 border-left'>
					<MDBCollapse id='reply-form' isOpen={this.state.collapseForm}>
						<CommentForm
							reply={true}
							title={`Responder a ${username}`}
							tooltip='Responder al Comentario'
							button='Responder'
							onAddComment={this.handleCommentReply}
						/>
					</MDBCollapse>
					<MDBCollapse id='replies' isOpen={this.state.collapseReplies}>
						<div
							className={
								replies.length ?
									'h6 text-muted' :
									'alert alert-info m-0 mt-1 p-0 py-1 text-center'
							}
						>
							{replies.length ? `Respuestas a ${username}`
								: `${username} no tiene respuestas`}
						</div>
						<CommentList
							path={`${this.props.path}/${this.props.comment.id}/replies`}
							comments={replies}
							onCommentReply={this.props.onCommentReply}
							onCommentReport={this.props.onCommentReport}
						/>
					</MDBCollapse>
				</div>
			</div>
		</div>
	}
}