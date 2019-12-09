import React, { Component } from 'react'
import Comment from "./comment";

export default class CommentList extends Component {
	render() {
		console.log(this.props.comments);

		const count = this.props.comments.length ? this.props.comments.length : 0

		return <div className="commentList">
			<h5 className="text-muted mb-4">
				<span className="badge badge-info">
					{count}
				</span>
				{" Comment"}{count === 1 ? "" : "s"}
			</h5>

			{
				count === 0 && !this.props.loading ? (
					<div className="alert text-center alert-info">
						Be the first to comment
		  			</div>
				) : <div></div>
			}
			{
				Object.keys(this.props.comments).map((key, index) => {
					const comment = this.props.comments[key]
					return <Comment key={index} comment={comment} />
				})
			}
		</div>
	}
}