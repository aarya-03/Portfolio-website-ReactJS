import React, { Component } from 'react'

export default class SkillCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="icon glass">{this.props.icon}</div>
                <span>{this.props.skill}</span>
            </div>
        )
    }
}
