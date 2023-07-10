import React from 'react';

const ButtonSave = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-warning'>
            {children}
        </button>
    );
};

export default ButtonSave;