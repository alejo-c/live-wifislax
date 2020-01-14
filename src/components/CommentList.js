import React, { Component } from 'react'

import Comment from './Comment';

export default class CommentList extends Component {
	render() {
		return Object.keys(this.props.comments).map((key, index) => {
			return <Comment
				key={index}
				username={this.props.username}
				comment={this.props.comments[key]}
				path={this.props.path}
				onCommentReply={this.props.onCommentReply}
				onCommentReport={this.props.onCommentReport}
				onCommentError={this.props.onCommentError}
			/>
		})
	}
}