import React, { useContext, useEffect, useState } from 'react'
import '../Style/Checkoutform.css'
import ThemeContext1 from "../Context/Themecontext";
import { useNavigate } from 'react-router-dom'
import CartContext1 from "../Context/Cartcontext";
import Formcontext1 from "../Context/Formcontext";

const Checkoutform = () => {
    const {values, setValues} = useContext(Formcontext1)
    const { cart, setCart } = useContext(CartContext1);
    const [isempty, setIsempty] = useState()

    const checkoutformNavigate = useNavigate()

    const {theme, setTheme} = useContext(ThemeContext1)
    const [componenttheme, setComponenttheme] = useState('')
    const [inptheme, setInptheme] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [bktheme, setBktheme] = useState('')
    const [btntheme, setBtntheme] = useState('')
    const handleFirstName = (e) => {
        setValues({...values, first_name: e.target.value})
    }

    const handleSecondName = (e) => {
        setValues({...values, last_name: e.target.value})
    }

    const handleEmail = (e) => {
        setValues({...values, email: e.target.value})
    }
    const handleAddress = (e) => {
        setValues({...values, address: e.target.value})
    }
    const handleCard = (e) => {
        setValues({...values, card: e.target.value})
    }
    const handleNumber1 = (e) => {
        setValues({...values, number1: e.target.value})
    }
    const handleNumber2 = (e) => {
        setValues({...values, number2: e.target.value})
    }
    const handleNumber3 = (e) => {
        setValues({...values, number3: e.target.value})
    }

    const handleExpiry = (e) => {
        setValues({...values, expiry: e.target.value})
    }

    const handleCcv = (e) => {
        setValues({...values, ccv: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (values.first_name && values.last_name && values.email && values.address && values.card && values.number1 && values.number2 && values.number3 && values.expiry && values.ccv) {
            checkoutformNavigate('/order-summary')
        }
    }

    useEffect(() => {
        
        if (theme=='light') {
            setComponenttheme('componentlight')
            setInptheme('inplighte')
            console.log('light');
        } else if (theme=='dark'){
            setComponenttheme('componentdark')
            setInptheme('inpdarke')
        }
    
      
    }, [theme])

    

    
    useEffect(() => {
        
        if (cart.length==0) {
            setIsempty(true)
        } else{
            setIsempty(false)
        }
    
      
    }, [])

    useEffect(() => {
        if (theme=='light') {
            setBktheme('bklighte')
            setBtntheme('btnlight')
        }else if (theme=='dark'){
            setBktheme('bkdarke')
            setBtntheme('btndark')
        }
    
    }, [theme])
    

    let output;

    if (isempty==false) {
        output = (
            <section className={`component ${componenttheme}`}>
            <div className="credit-card">
              <form onSubmit={handleSubmit}>
                <input type="text" id='name' autocomplete="off" value={values.first_name} onChange={handleFirstName} className={`${inptheme}`} placeholder="NAME" />
                { submitted && !values.first_name ? <span style={{color:"#e62222", textAlign:'left', marginLeft:'9px', fontSize:'14px'}}>Please type</span> : null}
                <input type="text" id='name' autocomplete="off" value={values.last_name} onChange={handleSecondName} className={`${inptheme}`} placeholder="LAST NAME" />
                { submitted && !values.last_name ? <span style={{color:"#e62222", textAlign:'left', marginLeft:'9px', fontSize:'14px'}}>Please type</span> : null}
                <input type="email" id='name' autocomplete="off" value={values.email} onChange={handleEmail} className={`${inptheme}`} placeholder="EMAIL" />
                { submitted && !values.email ? <span style={{color:"#e62222", textAlign:'left', marginLeft:'9px', fontSize:'14px'}}>Please type</span> : null}
                <input type="text" id='name' autocomplete="off" value={values.address} onChange={handleAddress} className={`${inptheme}`} placeholder="ADDRESS" />
                { submitted && !values.address ? <span style={{color:"#e62222", textAlign:'left', marginLeft:'9px', fontSize:'14px'}}>Please type</span> : null}
                <div className="line"><input type="text" autocomplete="off" value={values.card} onChange={handleCard} className={`${inptheme}`} placeholder="CARD"/> 
                
                <input type="text" autocomplete="off" placeholder="NUMBER" value={values.number1} onChange={handleNumber1} className={`${inptheme}`} /> 
                
                <input type="text" autocomplete="off" value={values.number2} onChange={handleNumber2} className={`${inptheme}`} />
                 
                <input type="text" autocomplete="off" value={values.number3} onChange={handleNumber3} className={`${inptheme}`} /></div>
                
                <div className="line">
                  <input className={`litle ${inptheme}`} type="text" autocomplete="off" value={values.expiry} onChange={handleExpiry}  placeholder="EXPIRY" />
                  
                </div>
                  <input className={`tall ${inptheme}`} type="text" autocomplete="off" value={values.ccv} onChange={handleCcv}  placeholder="CCV" />
                  { submitted && !values.card && !values.number1 && !values.number2 && !values.number3 && !values.expiry && !values.ccv ? <span style={{color:"#e62222", textAlign:'left', marginLeft:'9px', fontSize:'14px'}}>Please provide card details</span> : null}
                <input type="submit" className="btn" value="PROCEED TO CHECKOUT"  />
              </form>
            </div>
          </section>
        )
    } else{
        output = (
            <div className={`containere ${bktheme}`}>
            <h3>Access denied</h3>
            <button className={`buttone ${btntheme}`} onClick={()=>checkoutformNavigate('/')}>Go back home</button>
        </div>
        )
    }


  return (
   <div>
   
    {output}

    </div>
  )
}

export default Checkoutform