import React from 'react'
import { useSelector } from 'react-redux'

export const UserSettings = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const updateUserArray = useSelector(state => state.authenticationReducer.users);


    const onSubmit = (data) => {
        setFormSubmitted(true);
        dispatch(updateUser({ data }));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="Adam" ref={register()} />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Cook" ref={register()} />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="adam@example.com" ref={register()} />
        </div>
        <div>
            <label htmlFor="emailConfirm">Confirm your Email</label>
            <input type="email" name="emailConfirm" placeholder="adam@example.com" ref={register()} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" ref={register({ minLength: 8 })} />
            {errors.password && <small>min length 8 characters!</small>}
        </div>
        <div>
            <label htmlFor="passwordConfirm">Confirm your Password</label>
            <input type="password" name="passwordConfirm" placeholder="repeat password" ref={register({ minLength: 8 })} />
        </div>
        <div>
            <label htmlFor="streetName">Street</label>
            <input type="text" name="streetName" placeholder="2nd Ave 204" ref={register()} />
        </div>
        <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="Melborne" ref={register()} />
        </div>
        <div>
            <label htmlFor="postalcode">Postalcode</label>
            <input type="number" name="postalcode" placeholder="32455" ref={register()} />
        </div>
        <div>
            <label htmlFor="tel">Telephone</label>
            <input type="tel" name="tel" placeholder="12345657" ref={register()} />
        </div>
        <div>
            <label htmlFor="useragreement">User agreement</label>
            <input type="radio" name="useragreement" ref={register()} />
        </div>
        <div><button type="submit">Submit</button></div>
    </form>
    )
}
