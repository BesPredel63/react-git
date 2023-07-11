import React from 'react';

const InputNoLabel = ({type, value, onChange}) => {
    return (
        <div>
            <input
                type={type}
                className='form-control'
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputNoLabel;