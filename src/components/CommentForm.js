import React, { Component } from "react"
import { MDBInput } from 'mdbreact'

import './scrollable.css'

export default class CommentForm extends Component {
	constructor() {
		super()
		this.state = { username: '', content: '' }
	}

	handleChange = e => {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		if (this.state.username && this.state.content) {
			this.props.onAddComment(this.state)
			this.setState({ username: '', content: '' })
		}
	}

	render() {
		return <form className='ml-2' onSubmit={this.handleSubmit} autoComplete='off'>
			<h5 className="text-left">{this.props.title}</h5>
			<div>
				<MDBInput
					name='username'
					value={this.state.username}
					onChange={this.handleChange}
					type="text"
					label="Nombre"
					icon="user"
				/>
				<MDBInput
					className="scrollable"
					name='content'
					value={this.state.content}
					onChange={this.handleChange}
					type="textarea"
					label="Comentario"
					icon="pencil-alt"
					rows={2}
					style={{ resize: 'none' }}
				/>
			</div>
			<button className='btn btn-info' type='submit'>{this.props.action} &#10148;</button>
		</form>
	}
}