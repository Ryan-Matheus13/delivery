import React from 'react'

import './ItemMenu.css'

const ItemMenu = ({children, value}) => {
    return ( 
        <>
            <button className='item-menu-container'>
                <i>{children}</i>
                <span>{value}</span>
            </button>
        </>
     );
}
 
export default ItemMenu;