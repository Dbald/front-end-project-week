import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class List extends Component {
  renderNotes() {
    const notes = Object.values(this.props.notes);
    return notes.map(n => (
        
        <div className="Notes">
              <h2 ><Link className="title" to={`/notes/${n.id}`}>
                {n.title}</Link>
                <hr />
              </h2>
              <p>
                {n.content}
                <br />
              </p>
        </div>
        
    ));
  }
  render() {
    return <div className="notewrap">{this.renderNotes()}</div>;
  }
}
