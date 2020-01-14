import React, { Component } from "react";
import { MDBInput } from 'mdbreact'

import './scrollable.css'

export default class ReplyFrom extends Component {
	constructor() {
		super()
		this.state = { content: '' }
	}

	handleChange = e => {
		const { value, name } = e.target
		this.props.onCommentError('')
		this.setState({ [name]: value })
		this.setState({ username: this.props.username })
	}

	handleSubmit = e => {
		e.preventDefault()
		if (!this.props.username) {
			this.props.onCommentError('El comentario necesita un nombre')
		} else if (!this.state.content) {
			this.props.onCommentError('El comentario necesita un contenido')
		} else {
			this.props.onAddComment(this.state)
			this.props.onCommentError('')
			this.setState({ content: '' })
		}
	}

	render() {
		return <form className='text-left pr-2 mb-2' onSubmit={this.handleSubmit} autoComplete='off'>
			<MDBInput
				className='scrollable my-0 mr-0 px-0'
				name='content'
				value={this.state.content}
				onChange={this.handleChange}
				type='textarea'
				label='Responder al Comentario'
				icon='pencil-alt'
				style={{ resize: 'none' }}
			/>
			<div className='text-right m-0 p-0'>
				<button
					className='btn btn-info m-0'
					type='submit'
					data-toggle="tooltip"
					title="Responde al Comentario"
				>
					Responder &#10148;
					</button>
			</div>
		</form>
	}
}