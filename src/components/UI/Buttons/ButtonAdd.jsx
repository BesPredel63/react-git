import React from 'react';

const ButtonAdd = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-primary'>
            {children}
        </button>
    );
};

export default ButtonAdd;