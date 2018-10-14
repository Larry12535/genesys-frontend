import React, { PureComponent } from 'react'
import '../../Styles/Geography.css'

import Histogram from 'react-chart-histogram'

class Geography extends PureComponent {
    render() {
        const { day } = this.props
        const labels = [];
        const values = [];
        const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
        if (this.props.info) {
            const { geography } = this.props.info
            const geoLocation = geography.geoLocation
            if (geoLocation) {
                geoLocation.forEach(({ area, callerCount }) => {
                    labels.push(area)
                    values.push(callerCount)
                })
            }
        }

        const changeDayButtons = []
        for (let i = 0; i < day; i++) {
            changeDayButtons.push(
                <button key={i} className='nextDay' onClick={() => this.props.ChangeDay(i + 1)}>Day {i + 1}</button>
            )
        }
        
        return (
            <section className='geography'>
                <h1 className='AnalyticsInfo'>Geolocation Data</h1>
                <h2 className='dayNumber'>Day {day}</h2>
                <div className='geographyVisualization'>
                    <Histogram
                        xLabels={labels}
                        yValues={values}
                        width='800'
                        height='500'
                        options={options}
                    />
                </div>
                <div className='nextDayWrapper'>
                    <button className='nextDay' onClick={this.props.NextDay}>Next Day</button>
                </div>
                <div className='dayChangeButtonsWrapper'>
                    {changeDayButtons}
                </div>
            </section>
        );
    }
}

export default Geography