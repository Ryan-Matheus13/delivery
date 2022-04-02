import React from 'react'

import './QuantButton.css'

const QuantButton = () => {
    return ( 
        <>
        <div className='button-quant-container'>
            <button disabled className='sub'><span>-</span></button>
            <span className='quant-value'>0</span>
            <button className='add'><span>+</span></button>
        </div>
        </>
     );
}
 
export default QuantButton;