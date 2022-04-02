import React from 'react'

import './Observations.css'

const Observations = () => {
    return ( 
        <>
            <div className='observation-container'>
                <h2 className='observation-title'>Observações</h2>
                <textarea placeholder='Exemplo: Retire a cebola e picles.' className='observation-input' ></textarea>
            </div>
        </>
     );
}
 
export default Observations;