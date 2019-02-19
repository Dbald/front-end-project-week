import React, { Component } from 'react';
import Sidebar from './components/SideBar';
import CreateNotes from './components/CreateNote';
import Edit from './components/Edit';
import Register from './Actions/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import IndexPage from './pages/index';
import ShowPage from './pages/show';

class App extends Component {
constructor() {
  super();
  this.state = {
    notes: {
  1:{
      id: 1,
      title: "Welcome To Why Note!",
      content: "It's SUPER EASY to get started... Simply click the 'Create New Note' button to create your first Why Note!"
  }
}};
}

handleSave = (note) => {
  const ids = Object.keys(this.state.notes);
  const id = Math.max(...ids) + 1;

  note['id'] = id;

  const { notes } = this.state;

  this.setState({
    notes: {
      ...notes,
      [id]: note
    }
  });

  return id;
}

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Sidebar} />
          <Route exact path="/register" render={Register} />
          {/* <Route path="/view" render={ViewNotePage} /> */}
          <Route path="/list" component={(props) => <IndexPage {...props} notes={this.state.notes}/>} />
          <Route path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]}/>} />
          <Route path="/createnote" component={(props) => <CreateNotes {...props} onSave={this.handleSave}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
