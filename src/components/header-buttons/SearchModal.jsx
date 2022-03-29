import React from 'react'

import {MdClear} from 'react-icons/md'
import { FiSearch } from "react-icons/fi";

import './SearchModal.css'

const SearchModal = ({style}) => {
    return ( 
        <>
            <div style={style} className='search-container'>
                <div className='search-line'>
                    <FiSearch className='search-icon'></FiSearch>
                    <input type="text"/>
                    <MdClear className='clear-icon'></MdClear>
                </div>
            </div>
        </>
     );
}
 
export default SearchModal;