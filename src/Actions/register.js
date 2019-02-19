import React, { Component } from 'react';

export default  class Register extends Component {
    constructor(props) {
        super(props);

    this.state = {
        username: '',
        email: '',
        password: '',
        isAdmin: false
    }
    }
    handleFormSubmit({ username, password, confirmPassword }) {
        this.props.register(username, password, confirmPassword, this.props.history);
    }

    renderAlert = () => {
        if (!this.props.error) return null;
        return <h3>{this.props.error}</h3>;
    };

    render() {
        const handleSubmit = this.props;
        return(
            <div>
                <div><h1>Register</h1></div>
                <div className="register-form">
                    <form onSubmit={this.handleSubmit}>
                     <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
                </div>
            </div>
        )
    }
}

