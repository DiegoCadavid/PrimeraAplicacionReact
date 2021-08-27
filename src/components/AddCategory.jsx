import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( e => [inputValue , ...e]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                className='form-control shadow-sm w-100'
                type="text"
                placeholder='Escribe tu superHeroe'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory
