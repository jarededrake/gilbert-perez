import React, { Component } from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className='contact-us'>
      <div className='contact-us-info'>
        <p>Please feel free to send us e-mail with any questions you have.</p>
        <p>
          We know that time is of the essence with your move so we strive to
          respond before 24 hours.
        </p>
        <p>If this is an emergency please call us instad at 303-123-4567</p>
      </div>
      <div className='contact-us-form'>
        <form>
          <div class='form-group'>
            <label for='inputEmail'>Email address (required)</label>
            <input
              type='email'
              class='form-control'
              id='inputEmail'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div class='form-group'>
            <label for='inputFirstName'>Your first name (required)</label>
            <input
              type='email'
              class='form-control'
              id='inputLastName'
              aria-describedby='firstName'
              placeholder='Enter first name'
            />
          </div>
          <div class='form-group'>
            <label for='inputLastName'>Your last name (required)</label>
            <input
              type='email'
              class='form-control'
              id='inputLastName'
              aria-describedby='lastName'
              placeholder='Enter last name'
            />
          </div>
          <div class='form-group'>
            <label for='inputMobilePhone'>Your mobile phone</label>
            <input
              type='email'
              class='form-control'
              id='inputMobilePhone'
              aria-describedby='mobilePhone'
              placeholder='Enter mobile phone'
            />
          </div>
          <div class='form-group'>
            <label for='inputSubject'>Subject</label>
            <input
              type='email'
              class='form-control'
              id='inputSubject'
              aria-describedby='subject'
              placeholder='Enter subject'
            />
          </div>
          <div class='form-group'>
            <label for='message'>Your message</label>
            <textarea class='form-control' rows='5' id='message'></textarea>
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
