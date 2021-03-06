import React, { Component } from 'react'
import { MDBInput } from 'mdbreact'

export default class CommentForm extends Component {
	state = { username: '', content: '', errorMessage: '' }

	handleChange = e => {
		const { value, name } = e.target
		this.setState({ [name]: value, errorMessage: '' })
	}

	handleSubmit = e => {
		e.preventDefault()
		if (!this.state.username)
			this.setState({ errorMessage: 'El comentario necesita un nombre' })
		else if (!this.state.content)
			this.setState({ errorMessage: 'El comentario necesita un contenido' })
		else {
			this.props.onAddComment(this.state)
			this.setState({ content: '', errorMessage: '' })
		}
	}

	render() {
		return <form className='text-left' onSubmit={this.handleSubmit} autoComplete='off'>
			<div className={'text-muted ' + (this.props.reply ? 'h6' : 'h4 pt-2')}>
				{this.props.title}
			</div>
			<MDBInput
				className='my-0 mr-0 px-0'
				name='username'
				value={this.state.username}
				onChange={this.handleChange}
				type='text'
				label='Nombre'
				icon='user'
			/>
			<MDBInput
				className='scrollable my-0 mr-0 px-0'
				name='content'
				value={this.state.content}
				onChange={this.handleChange}
				type='textarea'
				label='Comentario'
				icon='pencil-alt'
				style={{ resize: 'none' }}
			/>
			<div className='d-flex justify-content-between text-right m-0 p-0'>
				<div
					className={'text-muted badge badge-danger m-0 ' + (this.state.errorMessage ? 'visible' : 'invisible')}
					style={{ height: '0%' }}
				>
					{this.state.errorMessage} <i className="fas fa-exclamation-circle" />
				</div>
				<button
					className='btn btn-info m-0'
					type='submit'
					data-toggle="tooltip"
					title={this.props.tooltip}
				>
					{this.props.button} &#10148;
				</button>
			</div>
		</form >
	}
}