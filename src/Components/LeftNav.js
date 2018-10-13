import React from 'react'
import '../Styles/LeftNav.css'

const pages = [
    {
        page: 'Geolocation',
        img: 'https://cdn.discordapp.com/attachments/454248926963564556/456516632018419712/DogIcon.jpg'
    },
    {
        page:'2',
        img:'https://cdn.discordapp.com/attachments/454248926963564556/500778735574712343/dog2.jpg'
    },
    {
        page:'3',
        img:'https://cdn.discordapp.com/attachments/454248926963564556/455005317693177886/guy_grabbing_dog.jpg'
    },
    {
        page:'4',
        img:'https://cdn.discordapp.com/attachments/454248926963564556/498916198021595136/dog3.jpg'
    }
]

function Nav(props) {
    return <section className='nav'>
        {pages.map(({ page, img }) => 
            <button
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
