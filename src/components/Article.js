import React, { Component } from 'react'

export default class Article extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <div>
            <a
                href={this.props.href}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.text}</a>
        </div>
    }
}