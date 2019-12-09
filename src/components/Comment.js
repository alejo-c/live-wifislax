import React, { Component } from "react";

import like from '../images/like.png'
import reply from '../images/reply.png'
import report from '../images/report.png'

export default class Comment extends Component {
	constructor() {
		super()
		this.state = {likes: 0, replies:[]}
	}

	componentDidMount(){
		this.setState({
			likes: this.props.comment.likes,
			replies: this.props.comment.replies
		})
	}

	render() {
		var { username, content } = this.props.comment;
		while(username.includes(' '.rep)) {
			username.replace(' ', '')
		}
		username = username.toLowerCase()

		const btnStyle = {
			WebkitFiter: 'grayscale(100%)',
			filter: 'grayscale(100%)',
			hover: {
				WebkitFiter: 'grayscale(0%)',
				filter: 'grayscale(0%)',
			}
		}

		return (
			<div className='mb-3'>
				<div className="media mb-1">
					<img
						className="mr-2 bg-light rounded"
						width="48"
						height="48"
						src={`https://api.adorable.io/avatars/48/${username}@adorable.io.png`}
						alt={username}
					/>
					<div className="media-body p-2 shadow-sm rounded bg-light border">
						{/* <small className="float-right text-muted">{date}</small> */}
						<h6 className="mt-0 mb-1"><strong>{username}</strong></h6>
						{content}
					</div>
				</div>
				<div>
					<span className='mx-5'><input style={btnStyle} type='image' src={like} width="20" alt='like' /></span>
					<span className='mx-5'><input type='image' src={reply} width="20" alt='reply' /></span>
					<span className='mx-5'><input type='image' src={report} width="20" alt='report' /></span>
				</div>
			</div>
		)
	}
}