import React, { Component } from 'react'
import Comment from "./Comment";

export default class CommentList extends Component {
	render() {
		const count = this.props.comments.length
		const scrollbarStyle = { overflowY: "scroll", height: "450px" }

		const hidden = { display: (this.props.loading ? '' : 'none') }
		const empty = { display: (count === 0 && !this.props.loading ? '' : 'none') }

		return <div className="commentList">
			<h5 className="text-muted">
				<div className="badge badge-info mr-1 mb-1">{count}</div>
				{`Comentario${count === 1 ? "" : "s"}`}
			</h5>

			<div className="spinner-border text-info" role="status" style={hidden}></div>

			<div className="alert text-center alert-info" style={empty}>
				Se el primero en comentar<i className="fa fa-comment-alt ml-1" />
			</div>

			<div className="scrollbar mr-2" style={scrollbarStyle}>
				{
					Object.keys(this.props.comments).map((key, index) => {
						const comment = this.props.comments[key]
						return <Comment
							key={index}
							comment={comment}
							onCommentReply={this.props.onCommentReply}
							onCommentReport={this.props.onCommentReport}
						/>
					})
				}
			</div>
		</div>
	}
}