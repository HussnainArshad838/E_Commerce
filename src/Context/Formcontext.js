import React, { useState } from 'react'
const FormContext1 = React.createContext()

export const Formcontext = (props) => {
    const [values, setValues] = useState({
        first_name:'',
        last_name:'',
        email:'',
        address:'',
        card:'',
        number1:'',
        number2:'',
        number3:'',
        expiry:'',
        ccv:''
    })

  return (
    <div>
        <FormContext1.Provider value={{values, setValues}}>
                {props.children}
        </FormContext1.Provider>

        {/* <App theme={theme} /> */}

    </div>
  )
}

export default FormContext1