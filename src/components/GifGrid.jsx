import React from 'react'
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <div>
            <h3 className='text-center' > {category} </h3>
            { loading  && <p className="animate__animated animate__flash">Cargando...</p> }
            {
                images.map(image => {
                    return (<GifGridItem key={image.id} url={image.url} title={image.title} />)
                })
            }
        </div>
    )
}

export default GifGrid
