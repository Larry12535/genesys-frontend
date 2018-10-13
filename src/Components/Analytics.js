import React, { Component } from 'react'
import '../Styles/Tickets.css'

class Tickets extends Component {
    render() {
        return (
            <section className='ticketSection'>
                <div className='incoming'>
                    <div>Incoming Tickets</div>
                    <div className='CallInfo'>
                        
                    </div>
                </div>
                <div className='dispatched'>
                    <div>Dispatched Tickets</div>
                    <div className='CallInfo'>
                        
                    </div>
                </div>
            </section>            
        );
    }
}

export default Tickets;