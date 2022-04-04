import React from 'react'

import './FixedButton.css'

const AddCartButton = ({children}) => {
    return ( 
        <>
            <button className='fixed-button'>{children}</button>
        </>
     );
}
 
export default AddCartButton;