import React, { useContext, useEffect, useState } from 'react'
import ThemeContext1 from "../Context/Themecontext";
import '../Style/Order.css'
import Formcontext1 from "../Context/Formcontext";
import { useNavigate } from 'react-router-dom'
import CartContext1 from "../Context/Cartcontext";

const Order = () => {
    const orderNavigate = useNavigate()

    const { cart, setCart } = useContext(CartContext1);
    const { values, setvalues } = useContext(Formcontext1)
    const { theme, setTheme } = useContext(ThemeContext1);
    const [bktheme, setBktheme] = useState('')
    const [btntheme, setBtntheme] = useState('')
    useEffect(() => {
        if (theme=='light') {
            setBktheme('bklighte')
            setBtntheme('btnlight')
        }else if (theme=='dark'){
            setBktheme('bkdarke')
            setBtntheme('btndark')
        }
    
    }, [theme])






    const showmore = () => {
        alert(JSON.stringify(cart));
        alert(JSON.stringify(values));
    }

    let output;
    if (cart.length == 0) {
        output = (
            <div className={`containere ${bktheme}`}>
            <h3>Access denied</h3>
            <button className={`buttone ${btntheme}`}>Go back home</button>
        </div>
        )
      
    } else {
        output = (
            <div className={`containere ${bktheme}`}>
            <h3>Your order has been confirmed</h3>
            
        <p onClick={showmore} className='show-more' style={{color:'#007AFF'}}>Show more</p>
        <br />
            <button className={`buttone ${btntheme}`} onClick={()=>orderNavigate('/')} >Continue shopping</button>
        </div>
        )
    }

  return (
    <div>
        {output}
        
</div>
  )
}

export default Order