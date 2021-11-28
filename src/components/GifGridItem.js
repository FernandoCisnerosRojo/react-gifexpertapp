import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ url, title }) => {

    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GifGridItem
