import React, { Component } from "react"

import './button.css'

export default class Comment extends Component {
	constructor() {
		super()
		this.state = { likes: 0, replies: [] }
	}

	componentDidMount = () => {
		this.setState({
			replies: this.props.comment.replies ? this.props.comment.replies : []
		})
	}

	clear = string => {
		while (string.includes(' ')) {
			string = string.replace(' ', '')
		}
		return string.toLowerCase()
	}

	onCommentReply = () => {
		this.props.onCommentReply(this.props.comment)
	}

	onCommentReport = () => {
		this.props.onCommentReport(this.props.comment)
	}

	render() {
		var { username, content, date } = this.props.comment;

		return (
			<div className='mb-1'>
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
						onClick={this.onCommentReply}
					>
						{this.state.replies.length}
						<i className="fa fa-comment-alt ml-1" />
					</button>
					<button
						className='btn btn-danger d-inline-block ml-5 py-1 px-2'
						onClick={this.onCommentReport}
					>
						<i className="fa fa-flag" />
					</button>
				</div>
			</div>
		)
	}
}