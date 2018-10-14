import React, { Component } from 'react'
import '../../Styles/TimeAnalysis.css'

import Histogram from 'react-chart-histogram'

const areas = [
    'Canada',
    'US',
    'Mexico',
    'Caribbean'
]

class TimeAnalysis extends Component {
    state = {
        Canada:[{ day: 1, percentChange: 0 }],
        US:[{ day: 1, percentChange: 0 }],
        Mexico:[{ day: 1, percentChange: 0 }],
        Caribbean:[{ day: 1, percentChange: 0 }],
        country:'Canada'
    }

    componentDidMount = () => {
        const { overTime } = this.props
        const state = this.state
        for (let i = 1; i < overTime.length; i++) {
            const day = overTime[i].day
            const geoLocationYesterday = overTime[i - 1].geography.geoLocation
            const geoLocationToday = overTime[i].geography.geoLocation
            for (let j = 0; j < areas.length; j++) {
                const country = areas[j]
                const today = geoLocationToday[j].callerCount
                const yesterday = geoLocationYesterday[j].callerCount
                const percentageChange = (today - yesterday)/today
                state[country].push({
                    day,
                    percentageChange
                })
            }
        }
        this.setState(state)
    }

    ChangeCountry = (country) => {
        const state = this.state
        state.country = country
        this.setState(state)
    }

    render() {
        const labels = [];
        const values = [];
        const country = this.state[this.state.country]
        country.forEach(({ day, percentageChange }) => {
            labels.push(`Day ${day}`)
            values.push(percentageChange)
        })
        const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

        return (
            <section className='timeAnalysis'>
                <h2 className='AnalyticsInfo'>Geographical Time Analysis</h2>
                <h2 className='dayNumber'>{this.state.country}</h2>
                <div className='geographyVisualization'>
                    <Histogram
                        xLabels={labels}
                        yValues={values}
                        width='800'
                        height='500'
                        options={options}
                    />
                </div>
                <div className='countryButtonWrapper'>
                    <button className='countryButton' onClick={() => this.ChangeCountry('Canada')}>Canada</button>
                    <button className='countryButton' onClick={() => this.ChangeCountry('US')}>US</button>
                    <button className='countryButton' onClick={() => this.ChangeCountry('Mexico')}>Mexico</button>
                    <button className='countryButton' onClick={() => this.ChangeCountry('Caribbean')}>Caribbean</button>
                </div>
            </section>
        );
    }
}

export default TimeAnalysis