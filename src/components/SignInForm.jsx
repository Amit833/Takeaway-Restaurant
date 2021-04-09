import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { SignInConfirmation } from "./SignInConfirmation";

export const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const allUsersArray = useSelector(
    (state) => state.authenticationReducer.users
  );

  const onSubmit = (data) => {
    console.log(data);
    const targetUser = allUsersArray.filter(
      (elem) => elem.email === data.email
    );
    if (data.password === targetUser[0].password && targetUser.length === 1) {
      return setFormSubmitted(true);
    }
    alert("wrong password or email");
  };

  return formSubmitted ? (
    <SignInConfirmation state={setFormSubmitted} />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="signIn">
      <h3>Sign In</h3>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"  {...register('email', { required: true })} />

      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"

          {...register('password', { required: true })}
        />

      </div>
      <div className="buttonContainer">
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};
