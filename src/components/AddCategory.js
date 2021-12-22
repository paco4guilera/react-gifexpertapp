import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => { 
        //console.log(e.target.value);
        setinputValue(e.target.value)
    }
    const selectInput = (e) => { 
        e.target.select();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //setCategories([...categories, inputValue]);
        if (inputValue.trim().length > 0) {
            setCategories(cats => [inputValue,...cats]);
            setinputValue('');
        }
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h5>Add Category</h5>
                <input
                    placeholder='Write a category'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={selectInput}
                />
            </form>
        </Fragment>
    )
}
AddCategory.propTypes = {
    //prop: PropTypes.Type.isRequired
    setCategories: PropTypes.func.isRequired
}