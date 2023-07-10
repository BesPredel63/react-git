import React from 'react';

const ButtonDelete = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-danger'>
            {children}
        </button>
    );
};

export default ButtonDelete;