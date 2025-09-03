import React, { useState } from 'react'

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} value={enterValues.email} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid address! </p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value={enterValues.password}  />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  )
}

export default Login