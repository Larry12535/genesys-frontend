import React from 'react'
import '../Styles/LeftNav.css'

const pages = [
    {
        page: 'Geolocation',
        img: 'https://cdn.discordapp.com/attachments/454248926963564556/500814006307520512/kisspng-world-earth-icon-world-transparent-background-5a77e818889893.2780457615178076405595.png'
    },
    {
        page:'Geolocation Over Time',
        img:'https://cdn.discordapp.com/attachments/454248926963564556/500818555852554240/graph.png'
    }
]

function Nav(props) {
    return <section className='nav'>
        {pages.map(({ page, img }) => 
            <button
                key={page}
                className='changePage'
                style={{ 
                    backgroundImage: `url(${img})`
                }}
                onClick={() => props.ChangePage(page)}
            />
        )}
    </section>
}

export default Nav
