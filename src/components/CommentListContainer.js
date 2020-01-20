import React, { Component } from "react";

import CommentList from './CommentList'

export default class CommentListContainer extends Component {
	render() {
		const count = this.props.comments.length
		const empty = { display: (count === 0 && !this.props.loading ? '' : 'none') }

		// const scrollbarStyle = { overflowY: "scroll", height: "500px" }
		return <div className="scrollbar pt-2">
			<h5 className="text-muted">
				<div className="badge badge-info mr-1 mb-1">{count}</div>
				{`Comentario${count === 1 ? "" : "s"}`}
			</h5>

			<div className="alert text-center alert-info" style={empty}>
				Se el primero en comentar <i className="far fa-comment-alt"></i>
			</div>

			<CommentList
				path={'posted'}
				comments={this.props.comments}
				onCommentReply={this.props.onCommentReply}
				onCommentReport={this.props.onCommentReport}
			/>
		</div>
	}
}