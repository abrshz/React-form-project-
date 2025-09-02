import React, { useState } from 'react'

function StateLogin() {
      const [enterValues, setEnterValues] = useState({ 
    email: '',
    password: ''
    });

    function handleSubmit(event) {
        event.preventDefault()
        setEnterValues({
            email: '',
            password: ''

        })
    }

    function handleInputChange (identifier , event){
    setEnterValues(prevValues =>({
      ...prevValues,
      [identifier]: event.target.value
    }));
  }

  return (
    <div>StateLogin</div>
  )
}

export default StateLogin