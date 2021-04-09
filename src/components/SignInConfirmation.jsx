import React from 'react';
import { Link } from 'react-router-dom';

export const SignInConfirmation = ({state}) => {
    return (
        <div>
           <h2> Login was successful!</h2>
           <Link to='/' ><button onClick={() => state(false)}>Continue Shopping</button></Link>
        </div>
    )
}