import React from 'react'

const GifGridItem = ({ id, url, title }) => {

    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
