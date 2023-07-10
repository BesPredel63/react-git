import React from 'react';

const InputLabel = ({type, unit, title, placeholder, value, onChange}) => {
    return (
        <div>
            <label htmlFor={unit}>{title}</label>
            <input
                type={type}
                id={unit}
                className='form-control'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputLabel;