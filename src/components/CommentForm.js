import React, { Component } from "react"
import { MDBContainer, MDBInput } from 'mdbreact'

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
		return <MDBContainer>
			<form onSubmit={this.handleSubmit} autoComplete='off'>
				<p className="h5 text-left mb-4">Publica un Comentario</p>
				<div>
					<MDBInput
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
						type="text"
						label="Nombre"
						icon="user"
						validate
						error="wrong"
						success="right"
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
				</div>
				<button className='btn btn-info' type='submit'>Enviar &#10148;</button>
			</form>
		</MDBContainer>
	}
}