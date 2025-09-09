import React, { useState } from 'react'
import Input from './Input';
import {isEmail, isNotEmpty , hasMinLength} from "../utilities/balidation"
import { useInput } from '../hooks/useInput';

function Login() {

  const {value: emailValue , handleInputChange: handleInputChange, handleInputBlur: handleInputBlur, hasError: emailHasError } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {value: passwordValue , handleInputChange: handlePasswordChange , handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput('', (value) => hasMinLength(value,6))

    function handleSubmit (event) {
      event.preventDefault();

      if (emailHasError || passwordHasError) {
        return;
      }

      console.log(emailValue , passwordValue);

    }


  return (
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
      <Input 
      label="Email" 
      id="email"
      type="email"
      name="email" 
      onBlur={() => handleInputBlur('email')}
      onChange = {handleInputChange}
      value ={emailValue}
      error={emailHasError && 'Please enter a valid email '} />

      <Input 
      label="Password" 
      id="password"
      type="password"
      name="password" 
      onBlur={handlePasswordBlur}
      onChange = {handlePasswordChange}
      value ={passwordValue}
      error={passwordHasError && 'Please enter a valid password'} />
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  )
}

export default Login