import React from 'react';

const Input = ({type, placeholder, children}) => {
    return ( 
        <>
            <div>
                {children}
                <input type={type} placeholder={placeholder} />
            </div>
        </>
     );
}
 
export default Input;
<>

</>