import React, { useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunchMan'])

    return (
        <div className='container'>
            <h2 className='text-center pt-4 bg-dark pb-4 my-2 text-light shadow fw-bold rounded'>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <br />
            <ol className='p-0'>
            {
                categories.map( category => (<GifGrid category= {category} key={category} className="" /> ) )
            }
            </ol>
        </div>
    );
}

export default GitExpertApp
