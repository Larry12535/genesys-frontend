import React, { Component } from 'react'
import '../Styles/Analytics.css'

import Geography from './Analytics/Geography'
import TimeAnalysis from './Analytics/TimeAnalysis'

const info = {
    geography:[],
    day:1
}

class Analytics extends Component {
    state = {
        overTime:[],
        day:0
    }

    componentDidMount = () => {
        this.GetData(1)
    }

    GetData = async (day) => {
        const data = await fetch('http://172.46.3.253:8080/geolocation')
        const json = await data.json()
        const dayInfo = {...info}
        dayInfo.geography = json
        dayInfo.day = day
        const state = this.state
        state.day = day
        state.overTime.push(dayInfo)
        this.setState(state)
    }

    NextDay = () => {
        this.GetData(this.state.day + 1)
    }

    render() {
        const { page } = this.props
        const currentDayInfo = this.state.overTime[this.state.day - 1]
        return (
            <section className='analytics'>
                {page === 'Geolocation' &&
                    <Geography 
                        GetData={this.GetData}
                        NextDay={this.NextDay}
                        info={currentDayInfo}
                        day={this.state.day}
                    />
                }
                {page === 'Geolocation Over Time' &&
                    <TimeAnalysis overTime={this.state.overTime}/>
                }
            </section>
        );
    }
}

export default Analytics;