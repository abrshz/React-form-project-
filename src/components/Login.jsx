import React, { useState } from 'react'

function Login() {
  const [enterValues, setEnterValues] = useState({ 
    email: '',
    password: ''
    });
  

  function handleSubmit (event) {
    event.preventDefault();
    console.log("Submitted");
  }

  function handleInputChange (identifier , event){
    setEnterValues(prevValues =>({
      ...prevValues,
      [identifier]: event.target.value
    }));
  }


  return (
     <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event)} value={enterValues.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  onChange= {(event) => handleInputChange('password', event) } value={enterValues.password} />
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