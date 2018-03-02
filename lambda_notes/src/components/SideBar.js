import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

class Sidebar extends Component {
    render() {
        return(
            <div className="Menu">
                <h1 id="title">Lambda<br/> Notes</h1>
                    <Link to='list'>
                        <button className="sidebutton"><b>View Your Notes</b></button><br/>
                    </Link>
                    <Link to='/createnote'>
                        <button className="sidebutton"><b>+ Create New Note</b></button>
                    </Link>
            </div>
        )
    }
}

export default Sidebar;