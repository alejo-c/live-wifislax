import React, { Component } from "react";

// import './icon.css'

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

	clear = (string) => {
		while (string.includes(' ')) {
			string = string.replace(' ', '')
		}
		return string.toLowerCase()
	}

	render() {
		var { username, content, date } = this.props.comment;

		return (
			<div className='mb-3'>
				<div className="media mb-1">
					<img
						className="mr-2 bg-light rounded"
						src={`https://api.adorable.io/avatars/48/${this.clear(username)}@adorable.io.png`}
						alt={username}
					/>
					<div className="media-body p-2 shadow-sm rounded bg-light border">
						<small className="float-right text-muted">{date}</small>
						<h6 className="mt-0 mb-1"><strong>{username}</strong></h6>
						{content}
					</div>
				</div>
				<div>
					<div className='text-warning d-inline-block ml-5' style={{ hover: 'cursor: pointer' }}>
						{this.state.replies.length + ' '}
						<i className="fa fa-comment-alt" />
					</div>
					<div className='text-danger d-inline-block ml-5' style={{ hover: 'cursor: pointer' }}>
						<i className="fa fa-flag" />
					</div>
				</div>
			</div>
		)
	}
}