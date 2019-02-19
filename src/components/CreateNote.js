import React from "react";
import { Link } from "react-router-dom";

export default class CreateNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: "",
        content: "",
        createdAt: undefined,
        updatedAt: undefined
      }
    };
  }

  updateValue = e => {
    const { note } = this.state;
    this.setState({
      note: { ...note, [e.target.name]: e.target.value }
    });
  };

  handleSave = e => {
    e.preventDefault();

    const id = this.props.onSave(this.state.note);
    this.props.history.replace(`/notes/${id}`);
  };

  render() {
    const { note } = this.state;
    return (
      <div className="new">
        <div className="new-note">
          <form id="form" onSubmit={this.handleSave}>
            <h1>Create New Note:</h1>
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Note Title"
              name="title"
              onChange={this.updateValue}
              value={note.title}
            />
            <textarea
              className="form-control1"
              type="text"
              placeholder="Note Content"
              name="content"
              onChange={this.updateValue}
              value={note.content}
            />
            <div className="button-holder">
            <button id="save" type="submit">
              <b>Save</b>
            </button>
            <Link to="/list">
              <button id="cancel"><b>Cancel</b></button>
            </Link></div>
          </form>
        </div>
      </div>
    );
  }
}
