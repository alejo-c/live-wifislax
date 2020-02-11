import React, { Component } from "react";

import CommentList from './CommentList'

export default class CommentListContainer extends Component {
	render() {
		const count = this.props.comments.length
		const empty = { display: (count === 0 && !this.props.loading ? '' : 'none') }

		return <div className="pt-md-3 pt-lg-3 pt-xl-3">
			<h5>
				<div className="badge badge-info mb-md-1">{count}</div>
				<span className='text-muted'>
					{` Comentario${count === 1 ? "" : "s"}`}
				</span>
			</h5>

			<div className="alert alert-info text-center" style={empty}>
				Se el primero en comentar <i className="far fa-comment-alt" />
			</div>

			<CommentList
				path={this.props.initialPath}
				comments={this.props.comments}
				onCommentReply={this.props.onCommentReply}
				onCommentReport={this.props.onCommentReport}
			/>
		</div>
	}
}