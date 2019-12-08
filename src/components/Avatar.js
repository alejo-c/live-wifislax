import React, { Component } from 'react'

function _stringAsciiPRNG(value, m) {
	const charCodes = [...value].map(letter => letter.charCodeAt(0));
	const len = charCodes.length;

	const a = (len % (m - 1)) + 1;
	const c = charCodes.reduce((current, next) => current + next) % m;

	let random = charCodes[0] % m;
	for (let i = 0; i < len; i++) {
		random = ((a * random) + c) % m;
	}
	return random;
}

export default class Avatar extends Component {
	render() {
		var initials = this.props.username.charAt(0)
		for (let i = 1; i < this.props.username.length; i++) {
			if (this.props.username[i - 1] === ' ') {
				initials += this.props.username[i]
			}
		}
		const colors = [
			'#d73d32',
			'#7e3794',
			'#4285f4',
			'#67ae3f',
			'#d61a7f',
			'#ff4080'
		]
		const index = _stringAsciiPRNG(this.props.username, colors.length);
		const color = colors[index]

		const style = {
			backgroundColor: color,
			width: '50px',
			height: '50px',
			margin: '10px',
			fontSize: '2vw',
			borderRadius: '10px'
		}

		return <div className='text-center text-white d-inline-block' style={style}>
			{initials.toUpperCase()}
		</div>
	}
}