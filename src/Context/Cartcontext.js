import React, { useState } from 'react'
const CartContext1 = React.createContext()

export const Cartcontext = (props) => {
    const [cart, setCart] = useState([])

  return (
    <div>
        <CartContext1.Provider value={{cart, setCart}}>
                {props.children}
        </CartContext1.Provider>

        {/* <App theme={theme} /> */}

    </div>
  )
}

export default CartContext1