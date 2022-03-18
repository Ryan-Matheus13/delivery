import React from 'react'

import './Warning.css'

const Warning = ({ children }) => {
    return ( 
        <>
            <div className='warning-container'>
                <div className='warning'>
                    <span>Compra mínima acima de R$20,00 reais</span>
                </div>
            </div>
        </>
     );
}
 
export default Warning;