import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser } from "../actions/authenticationAction";
import { SignUpConfirmation } from "./SignUpConfirmation";

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const allUsersArray = useSelector(
    (state) => state.authenticationReducer.users
  );

  const onSubmit = (data) => {
    const targetUser = allUsersArray.find((elem) => elem.email === data.email);
    if (targetUser) return alert("User already exits!");
    setFormSubmitted(true);
    dispatch(addUser({ data }));
  };
  return formSubmitted ? (
    <SignUpConfirmation state={setFormSubmitted} />
  ) : (
    <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Adam"
          {...register('firstName', { required: true })}
        />
        {/* {errors.firstName && <span>This field is required</span>} */}

      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Cook"
          {...register('lastName', { required: true })}
        />

      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="adam@example.com"
          {...register('email', { required: true })}
        />

      </div>
      <div>
        <label htmlFor="emailConfirm">Confirm your Email</label>
        <input
          type="email"
          placeholder="adam@example.com"
          {...register('emailConfirm', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          {...register('password', { required: true, minLength: 6 })}
        />

      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm your Password</label>
        <input
          type="password"
          placeholder="repeat password"
          {...register('passwordConfirm', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="streetName">Street</label>
        <input
          type="text"
          placeholder="2nd Ave 204"
          {...register('streetName', { required: true })}
        />

      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Melborne"
          {...register('city', { required: true })}
        />

      </div>
      <div>
        <label htmlFor="postalcode">Postalcode</label>
        <input
          type="number"
          // name="postalcode"
          placeholder="32455"
          {...register('postalcode', { required: true })}
        />

      </div>
      <div>
        <label htmlFor="tel">Telephone</label>
        <input
          type="tel"
          placeholder="12345657"
          {...register('tel', { required: true })}
        />

      </div>
      <div className="userAgreement">
        <label htmlFor="useragreement">User agreement</label>
        <input
          type="radio"

          {...register('useragreement', { required: true })}
        />

      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
