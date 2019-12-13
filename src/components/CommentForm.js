import React, { Component } from "react"
import { MDBInput } from 'mdbreact'

export default class CommentForm extends Component {
	constructor() {
		super()
		this.state = { username: '', content: '', replying: false }
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
			<h5 className="text-left">Publica un Comentario</h5>
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
					name='content'
					value={this.state.content}
					onChange={this.handleChange}
					type="textarea"
					label="Comentario"
					icon="pencil-alt"
					style={{ resize: 'none' }}
				/>
				<div style={{ display: this.state.replying ? '' : 'none' }}>

				</div>
			</div>
			<button className='btn btn-info' type='submit'>Enviar &#10148;</button>
		</form>
	}
}