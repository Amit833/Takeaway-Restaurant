import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpConfirmation = ({state}) => {
    return (
        <div>
           <h2> Your Sign Up was successful, we send you an email to confirm your email address!</h2>
           <Link to='/' ><button onClick={() => state(false)}>Continue Shopping</button></Link>
        </div>
    )
}
