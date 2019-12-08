import React, { Component } from 'react'

import like from '../images/like.png'
import reply from '../images/reply.png'
import report from '../images/report.png'

import Avatar from './avatar'

export default class Comment extends Component {
	constructor() {
		super()
		this.state = { likes: 0, comments: 0 }
	}

	render() {
		const btnStyle = {
			WebkitFiter: 'grayscale(100%)',
			filter: 'grayscale(100%)',
			hover: {

				WebkitFiter: 'grayscale(0%)',
				filter: 'grayscale(0%)',
			}
		}

		return <div>
			<div>
				<div className='d-inline-block align-top'>
					<Avatar username={this.props.comment.username} width="48" height="48" />
				</div>
				<div className='d-inline-block'>
					<div><strong>{this.props.comment.username}</strong></div>
					<div>{this.props.comment.text}</div>
				</div>
			</div>
			<span className='mr-5'><input style={btnStyle} type='image' src={like} width="20" alt='like' /></span>
			<span className='mr-5'><input type='image' src={reply} width="20" alt='reply' /></span>
			<span className='mr-5'><input type='image' src={report} width="20" alt='report' /></span>
		</div>
	}
}