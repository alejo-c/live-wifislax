import React, { Component } from 'react'
import { MDBCollapse } from 'mdbreact'

import ReplyForm from './ReplyForm'
import CommentList from './CommentList'

export default class Comment extends Component {
	state = { replies: [], collapseID: '', reported: false }

	clear = string => {
		while (string.includes(' '))
			string = string.replace(' ', '')
		return string.toLowerCase()
	}

	handleCommentReply = reply => {
		this.props.onCommentReply(
			`${this.props.path}/${this.props.comment.id}/replies/`,
			reply
		)
	}

	handleCommentReport = () => {
		this.props.onCommentReport(this.props.comment)
		this.setState({ reported: true })
	}

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}))
	}

	render() {
		const angle = this.state.collapseID === 'collapse' ? "fa fa-angle-up" : "fa fa-angle-down"

		const { username, content, date } = this.props.comment
		let replies
		let length

		if (this.props.comment.replies === undefined) {
			replies = []
			length = 0
		} else {
			replies = Object.keys(this.props.comment.replies).map(key => {
				return this.props.comment.replies[key]
			})
			length = replies.length
		}

		return <div className='mb-1'>
			<div className='media'>
				<img
					className='mr-1 rounded'
					src={`https://api.adorable.io/avatars/50/${this.clear(username)}@adorable.io.png`}
					alt={username}
				/>
				<div className='media-body p-2 shadow-sm rounded bg-light border'>
					<small className='float-right text-muted'>{date}</small>
					<h6 className='mr-2'><strong>{username}</strong></h6>
					{content}
				</div>
			</div>
			<div className='ml-2'>
				<button
					className='btn btn-warning d-inline-block ml-5 py-1 px-1'
					onClick={this.toggleCollapse('collapse')}
					data-toggle="tooltip"
					title="Ver Respuestas"
				>
					{length}
					<i className='fa fa-comment-alt ml-1' />
					<i className={'ml-1 ' + angle} />
				</button>
				<button
					className='btn btn-danger d-inline-block ml-4 py-1 px-2'
					onClick={this.handleCommentReport}
					data-toggle="tooltip"
					title="Reportar Comentario"
				>
					<i className='fa fa-flag' />
				</button>
				<span className={'badge badge-info ' + (this.state.reported ? 'visible' : 'invisible')}>
					Comentario reportado <i className='fa fa-check-circle' />
				</span>
			</div>

			<MDBCollapse id='collapse' isOpen={this.state.collapseID}>
				<div className='pl-2 ml-5'>
					<ReplyForm
						onAddComment={this.handleCommentReply}
					/>
					<h6 className={'text-muted' + (replies.length ? '' : ' invisible')}>Respuestas</h6>
					<CommentList
						path={`${this.props.path}/${this.props.comment.id}/replies`}
						comments={replies}
						onCommentReply={this.props.onCommentReply}
						onCommentReport={this.props.onCommentReport}
					/>
				</div>
			</MDBCollapse>
		</div >
	}
}