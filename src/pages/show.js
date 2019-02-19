import React, { Component } from 'react'

export default class ShowPage extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="view-note"> 
        <div className="note-container">
        <h1>{note.title}</h1>
        <div>{note.content}</div>
        </div>
      </div>
    )
  }
}
