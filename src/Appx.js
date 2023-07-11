
import './Style/Navstyle.css'
import './Style/Style.css'

import Products from './Components/Products';
import { useContext, useEffect, useState } from 'react';
import ThemeContext1 from './Context/Themecontext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Cart from './Components/Cart'
import Navbar from './Components/Navbar';
import Error404 from './Components/Error404';
import Checkoutform from './Components/Checkoutform';
import Order from './Components/Order';
function Appx() {
    const {theme, setTheme} = useContext(ThemeContext1)

    const [appc, setAppc] = useState('')

    useEffect(() => {
      if (theme=='light') {
        setAppc('applight')
      }else if(theme=='dark'){
        setAppc('appdark')
      }
    },[theme])
    

  return (
    <div className={appc}>
      . {/* Ignore just to make up some space at the top to fill up bg  */}

      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout-form' element={<Checkoutform />} />
            <Route path='/order-summary' element={<Order />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>

        </div>
  );
}

export default Appx;
