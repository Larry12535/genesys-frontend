import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    componentDidMount = () => {
        fetch('http://localhost:3002/login')
        .then(() => {
            console.log('data received')
            this.props.history.push('/Dashboard')
        })
    }

    render() {
        return (
            <div>
                <h1>Not Logged In</h1>
            </div>
        );
    }
}

export default withRouter(Login)