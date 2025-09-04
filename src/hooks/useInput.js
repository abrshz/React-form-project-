import { useState } from "react";

export function useInput (defaultValue){
    const [enterValue, setEnterValue] = useState(defaultValue);
    
    const [didEdit, setDidEdit ] = useState(false);

     function handleInputChange (event){
    setEnterValue(event.target.value);
    setDidEdit(false)
    }

    function handleInputBlur () {
      setDidEdit(true)
    }

    return{
        value: enterValue,
        handleInputChange,
        handleInputBlur
    }
}