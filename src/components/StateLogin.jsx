import React, { useState } from 'react'
import Input from './Input';

function Login() {
  const [enterValues, setEnterValues] = useState({ 
    email: '',
    password: ''
    });

    const [didEdit, setDidEdit ] = useState({
      email : false,
      password : false
    })

    function handleSubmit(event) {
        event.preventDefault()
       
    }

    const emailIsInvalid = didEdit.email  && !enterValues.email.includes('@');
    const passwordIsInvalid = didEdit.password && enterValues.password.trim().length < 6;

    function handleInputChange (identifier , event){
    setEnterValues(prevValues =>({
      ...prevValues,
      [identifier]: event
    }));
    setDidEdit(prevEdit => ({
        ...prevEdit , [identifier] : false,
      }))
    }

    function handleInputBlur (identifier) {
      setDidEdit(prevEdit => ({
        ...prevEdit , [identifier] : true,
      }))

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
      onChange = {(event) => handleInputChange('email', event.target.value)}
      value ={enterValues.email}
      error={emailIsInvalid && 'Please enter a valid email '} />

      <Input 
      label="Password" 
      id="password"
      type="password"
      name="password" 
      onBlur={() => handleInputBlur('password')}
      onChange = {(event) => handleInputChange('password', event.target.value)}
      value ={enterValues.password}
      error={passwordIsInvalid && 'Please enter a valid password'} />
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  )
}

export default Login