import React, { Component } from 'react'

import Comment from './Comment';

export default class CommentList extends Component {
	render() {
		return Object.keys(this.props.comments).map((key, i) =>
			<Comment
				key={i}
				path={this.props.path}
				comment={this.props.comments[key]}
				onCommentReply={this.props.onCommentReply}
				onCommentReport={this.props.onCommentReport}
			/>
		)
	}
}