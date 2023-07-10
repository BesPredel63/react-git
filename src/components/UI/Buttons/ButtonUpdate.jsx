import React from 'react';

const ButtonUpdate = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-success'>
            {children}
        </button>
    );
};

export default ButtonUpdate;