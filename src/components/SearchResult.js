import React from 'react'
import '../styles/SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className='searchResult_heart' />

            <div className='searchResult_info'>
                <div className='searchResult_info_top'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>________</p>
                    <p>{ description}</p>
                </div>
                <div className='searchResult_info_bottom'>
                    <div className='searchResult_stars_box'>
                        <StarIcon className='searchResult_star' />
                        <p><strong>{star }</strong></p>
                    </div>
                    <div className='searchResult_price'>
                        <h2>{price}</h2>
                        <p>{ total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
