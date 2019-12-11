import React, { Component } from 'react'
import Comment from "./Comment";

export default class CommentList extends Component {
	render() {
		const count = this.props.comments.length ? this.props.comments.length : 0
		const scrollbarStyle = { overflowY: "scroll", height: "500px" }


		return <div className="commentList">
			<h5 className="text-muted">
				<span className="badge badge-info">
					{count}
				</span>
				{" Comentario"}{count === 1 ? "" : "s"}
			</h5>

			{
				count === 0 && !this.props.loading ? (
					<div className="alert text-center alert-info">
						Be the first to comment
		  			</div>
				) : null
			}
			<div class="scrollbar mr-2" style={scrollbarStyle}>
				{
					Object.keys(this.props.comments).map((key, index) => {
						const comment = this.props.comments[key]
						return <Comment key={index} comment={comment} />
					})
				}
			</div>
		</div >
	}
}