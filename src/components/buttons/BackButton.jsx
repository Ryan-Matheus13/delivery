import React from 'react'

import './BackButton.css'

import {BiLeftArrowAlt} from 'react-icons/bi'

const BackButton = () => {
    return ( 
        <>
            <button className='back-button'>
                <BiLeftArrowAlt></BiLeftArrowAlt>
            </button>
        </>
     );
}
 
export default BackButton;