import React, { Fragment, useState, useEffect } from 'react'



const UseValidation  = ( stateInicial, validation, submitFn ) => {

    const [ validate, setValidate ]         = useState( stateInicial );
    const [ error, setError ]               = useState({});
    const [ submitForm, setSubmitForm ]     = useState(false);

    useEffect(() => {
        if(submitForm){
            const notError = Object.keys(error).length === 0;

            if(notError) submitFn();
            setSubmitForm(false);
        }
      
    }, [error]);


    const handleChange = ( e ) =>{
        setValidate({
            ...validate,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const validateError = validation(validate);
        setError(validateError);
        setSubmitForm(true);
    }

    const handleBlur = () => {
        const validateError = validation(validate);
        setError(validateError);
    }


    return {
        validate,
        error,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default UseValidation;