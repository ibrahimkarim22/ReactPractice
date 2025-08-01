/**
 * 
 * https://www.reacterry.com/portal/challenges/validate-sign-up-form
 * 
 * Validate sign-up form
In this coding challenge we have provided you with a very basic sign-up form that 
collects some information form the users. Your task is to add validation to the
 form to improve the user experience.

You need to make sure that:

The first name is not empty.
The last name is not empty.
Email is a valid email address.
Password is at least 8 characters long.
Confirm password field has the same value as the password.
Match the above conditions to relevant error messages in Example 
section and display them below the relevant input fields.

You should update the handleSubmit method to show the alert only
if all of the input values are accepted, alternatively display only 
the relevant error messages.

Errors should be displayed only after the user has pressed the Sign Up button,
if there are no errors call console.log(’Form submitted successfully’).
 
You can use this regex /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ for email validation.

*/


/**My Solution */

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const SignUpForm = () => {

const [ firstName, setFirstName ] = useState('');
const [ lastName, setLastName ] = useState('');
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');
const [ confirmPass, setConfirmPass ] = useState('');
const [ submitClicked, setSubmitClicked ] = useState(false);

const emailFormat = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);

if (firstName.length > 0 && lastName.length > 0 && emailFormat.test(email) && password.length > 7 && confirmPass === password) {
    return console.log('Form submitted successfully');
}


  };

  

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {firstName.length <= 0 && submitClicked &&
        
        <p data-testid="first-name-error-id" className="error">First name cannot be empty</p>
        }
      
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {lastName.length <= 0 && submitClicked &&
        <p data-testid="last-name-error-id" className="error">Last name cannot be empty</p>
        }

        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!emailFormat.test(email) && submitClicked &&
        <p data-testid="email-error-id" className="error">Invalid email address</p>
        }

        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length <= 7 && submitClicked &&
        <p data-testid="password-error-id" className="error">Password must be greater than 7 characters</p>
        }
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        {password !== confirmPass && submitClicked &&
        <p data-testid="confirm-password-error-id" className="error">Passwords are not matching</p>
        }

        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;


/** Reacterry's object solution */

/**
 * import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formValues;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName.length) {
      newErrors.firstName = 'First name cannot be empty';
      isValid = false;
    }

    if (!lastName.length) {
      newErrors.lastName = 'Last name cannot be empty';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length <= 7) {
      newErrors.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <p data-testid="first-name-error-id" className="error">{errors.firstName}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleChange}
        />
        <p data-testid="last-name-error-id" className="error">{errors.lastName}</p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
        />
        <p data-testid="email-error-id" className="error">{errors.email}</p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p data-testid="password-error-id" className="error">{errors.password}</p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <p data-testid="confirm-password-error-id" className="error">{errors.confirmPassword}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
 */