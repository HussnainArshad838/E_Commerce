import React, { useContext, useEffect, useState } from 'react'
import ThemeContext1 from "../Context/Themecontext";
import '../Style/error404.css'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const notfoundNavigate = useNavigate()

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
    
  return (
    <div>
        <div className={`containere ${bktheme}`}>
            <h3>404, page not found.</h3>
            <button className={`buttone ${btntheme}`} onClick={()=>notfoundNavigate('/')}>Go back home</button>
        </div>
    </div>
  )
}

export default Error404