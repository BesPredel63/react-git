import React from 'react';

const InputNoLabel = (type, value) => {
    return (
        <div>
            <input
                type={type}
                className='form-control'
                value={value}
            />
        </div>
    );
};

export default InputNoLabel;