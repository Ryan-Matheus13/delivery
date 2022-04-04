import React from 'react';

import FixedButton from '../components/buttons/FixedButton'
import Input from '../components/inputs/Input';
import SelectInput from '../components/inputs/SelectInput';

import './FinalizeOrder.css'

const FinalizeOrder = () => {
    return ( 
        <>
        <form action="">
            <div className='data-container'>
                <Input name='nome' placeholder='Nome' type='text'></Input>
                <Input name='email' placeholder='E-mail' type='email'></Input>
                <Input name='whatsapp' placeholder='Whatsapp' type='tel'></Input>
                <Input name='senha' placeholder='Senha' type='password'></Input>
            </div>
            <div className='presentation-container'>
                <Input></Input>
                <SelectInput></SelectInput>
            </div>
        </form>
        <div>modal de descrição do carrinho</div>
        <FixedButton>Proximo</FixedButton>
        
        </>
     );
}
 
export default FinalizeOrder;