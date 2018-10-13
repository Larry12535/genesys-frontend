import React, { Component } from 'react'
import '../Styles/Analytics.css'

import Geography from './Analytics/Geography' 

class Analytics extends Component {
    render() {
        const { page } = this.props
        return (
            <section className='analytics'>
                {page === 'Geolocation' &&
                    <Geography/>
                }
            </section>
        );
    }
}

export default Analytics;