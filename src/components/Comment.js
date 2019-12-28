import React, { Component } from "react"
import { MDBCollapse, MDBListGroup } from "mdbreact"

import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default class Comment extends Component {
	constructor() {
		super()
		this.state = { replies: [], collapseID: "" }
	}

	clear = string => {
		while (string.includes(' ')) {
			string = string.replace(' ', '')
		}
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
	}

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}))
	}

	render() {
		var { username, content, date } = this.props.comment;
		var replies
		var length
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
			<div className="media">
				<img
					className="mr-2 bg-light rounded"
					src={`https://api.adorable.io/avatars/48/${this.clear(username)}@adorable.io.png`}
					alt={username}
				/>
				<div className="media-body p-2 shadow-sm rounded bg-light border mr-2">
					<small className="float-right text-muted">{date}</small>
					<h6 className="mr-2"><strong>{username}</strong></h6>
					{content}
				</div>
			</div>
			<div className='ml-2'>
				<button
					className='btn btn-warning d-inline-block ml-5 py-1 px-1'
					onClick={this.toggleCollapse('collapse')}
				>
					{length}
					<i className="fa fa-comment-alt ml-1" />
				</button>
				<button
					className='btn btn-danger d-inline-block ml-5 py-1 px-2'
					onClick={this.handleCommentReport}
				>
					<i className="fa fa-flag" />
				</button>
			</div>

			<MDBCollapse id='collapse' isOpen={this.state.collapseID}>
				<MDBListGroup>
					<div className="ml-5">
						<div className='ml-1'>
							<CommentForm
								title="Responde al Comentario"
								action='Responder'
								onAddComment={this.handleCommentReply}
							/>
						</div>
						<div className='ml-3'>
							<CommentList
								loading={false}
								comments={replies}
								path={`${this.props.path}/${this.props.comment.id}/replies`}
								onCommentReply={this.props.onCommentReply}
								onCommentReport={this.props.onCommentReport}
							/>
						</div>
					</div>
				</MDBListGroup>
			</MDBCollapse>
		</div>
	}
}