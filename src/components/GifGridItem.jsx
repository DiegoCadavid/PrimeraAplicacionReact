import React from 'react'

const GifGridItem = ({ title, url }) => {
    return (
        <>
            <li className='d-inline item  animate__animated animate__fadeIn'>
                <div className='card m-2 bg-dark text-white d-inline-block w-35'>
                    <img src={url} alt={title} className='card-img' />
                    <div className='card-img-overlay'>
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>

            </li>
        </>
    )
}

export default GifGridItem
