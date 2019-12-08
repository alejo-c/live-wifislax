import React, { Component } from 'react'

export default class CommentForm extends Component {
	constructor() {
		super()
		this.state = { username: '', text: '' }
	}

	handleChange = (e) => {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (this.state.username && this.state.text) {
			this.props.onAddComment(this.state)
			this.setState({ username: '', text: '' })
		}
	}

	render() {
		return <form className='text-left d-block' onSubmit={this.handleSubmit} autoComplete='off'>
			<div className="form-group">
				<input
					className="form-control"
					name='username'
					value={this.state.username}
					placeholder="Nombre"
					onChange={this.handleChange}
				/>
			</div>
			<div className="form-group">
				<textarea
					className="form-control"
					style={{ resize: 'none' }}
					name='text'
					value={this.state.text}
					placeholder='Agrega un comentario público'
					onChange={this.handleChange}
				/>
			</div>
			<button className='btn btn-info'>Enviar</button>
		</form >
	}
}