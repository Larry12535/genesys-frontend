import React from 'react'
import '../Styles/TopNav.css'

function TopNav(props) {
    return <section className='topNav'>
        <div className='page'>{props.page}</div>
    </section>
}

export default TopNav