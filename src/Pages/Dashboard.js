import React, { Component } from 'react'
import { LeftNav, TopNav } from '../Components'

import '../Styles/Dashboard.css'

class Dashboard extends Component {
    state = {
        page:'Geolocation'
    }

    ChangePage = (page) => {
        this.setState({
            page
        })
    }

    render() {
        return (
            <section className='dashboard'>
                <TopNav page={this.state.page}/>
                <div className='bottom'>
                    <LeftNav ChangePage={this.ChangePage}/>
                </div>
            </section>
        );
    }
}

export default Dashboard;