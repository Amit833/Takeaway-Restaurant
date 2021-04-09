import React from "react";

export const Contact = () => {
  return (
    <>
      <form className="contactForm">
        <h3>Contact Us</h3>

        <div>
          <label htmlFor="name">name</label>
          <input type="text" placeholder="adam" />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input type="email" placeholder="adam@gmail.com" />
        </div>

        <div>
          <label htmlFor="text-area">message</label>
          <input
            className="text-area"
            type="text"
            placeholder="write your message here"
          />
        </div>

        <div className="buttonContainer">
          <button>submit</button>
        </div>
      </form>
    </>
  );
};
