import React, { useContext } from 'react'
import '../Style/Style.css'
import ThemeToggle from './ThemeToggle.js'
import ThemeContext1 from "../Context/Themecontext";
import { NavLink } from 'react-router-dom'
import CartContext1 from "../Context/Cartcontext";

const Navbar = () => {
  const {cart, setCart} = useContext(CartContext1)
  const {theme, setTheme} = useContext(ThemeContext1)

  return (
    <div>
        <div className="navbar">
        <NavLink className="leftside" to='/' >Ecommerce.js</NavLink>
    <ThemeToggle/>

    <div className="rightside"> 
    <NavLink to='/cart' ><span id='carticon' className="fa-stack fa-2x has-badge leftside" data-count={cart.length}>
  <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
  <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
</span></NavLink>
    </div>

  </div>
    </div>
  )
}

export default Navbar
