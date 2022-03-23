import React from 'react'

import './DrawerMenu.css'

import { Drawer } from '@mui/material';

const DrawerMenu = () => {
    return ( 
        <>
            <Drawer variant='temporary'>
                <div className='item-menu'>
                    teste
                </div>
            </Drawer>
        </>
     );
}
 
export default Drawer;