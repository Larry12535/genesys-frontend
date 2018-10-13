import React, { Component } from 'react'
import '../../Styles/Geolocation.css'

import ReactMapGL from 'react-map-gl';

class Geography extends Component {
    state = {
        geography:[]
    }

    componentDidMount = () => {
        fetch('http://172.46.3.253:8080/geolocation')
        .then(data => data.json())
        .then((data) => {
            this.setState({
                geography:data.geoLocation
            })
        })
    }

    render() {
        const { geography } = this.state
        return (
            <section className='geography'>
                <h1 className='AnalyticsInfo'>Geolocation Data</h1>
                <div className='geographyVisualization'>
                    <ReactMapGl
                        width={400}
                        height={400}
                        latitude={37.7577}
                        longitude={-122.4376}
                        zoom={8}
                    />
                </div>
            </section>
        );
    }
}

export default Geography