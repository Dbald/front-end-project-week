import React, { Component } from 'react';
import List from '../components/List';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="NotesPage">
        <h1 className="note-title">Notes:</h1>
        <div>
         <List notes={this.props.notes} />
         </div>
      </div>
    )
  }
}
