import React, { useContext, useEffect, useState } from "react";
import CartContext1 from "../Context/Cartcontext";
import "../Style/Cart.css";
import ThemeContext1 from "../Context/Themecontext";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const checkoutNavigate = useNavigate()

  const { cart, setCart } = useContext(CartContext1);
  const { theme, setTheme } = useContext(ThemeContext1);
  const [blocktheme, setBlocktheme] = useState("");
  const [btntheme, setBtntheme] = useState("");
  const [totalTheme, setTotaltheme] = useState("");
  const [isEmpty, setIsempty] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (theme == "light") {
      setBlocktheme("bklight");
      setTotaltheme("totallight");
      setBtntheme("btnlight");
    } else if (theme == "dark") {
      setBlocktheme("bkdark");
      setTotaltheme("totaldark");
      setBtntheme("btndark");
    }
  }, [theme]);

  useEffect(() => {
    if (cart.length == 0) {
      setIsempty(true);
    } else {
      setIsempty(false);
    }
  });

  useEffect(() => {
    cart.map((item) => setTotal((prev) => prev + item.price / 2));

    //   console.log(total);
  }, []);

  let output;
  let checkout;
  let emptycart;
  if (isEmpty == true) {
    output = (
      <h2 className={`container ${blocktheme}`} style={{ paddingTop: "100px" }}>
        Cart is empty, Start adding items.
      </h2>
    );

      checkout =      (
      <div className={`total ${totalTheme}`}>
      <div className="containertotal">
        Total:${total}
        <button id="checkout" className={`button ${btntheme}`} onClick={()=>{alert('Add products to checkout')}}>
          Checkout
        </button>
        
      </div>
    </div>
      )
  } else {
    emptycart = (
      <div className="clearcartcontainer">
      <button onClick={()=>{
        setCart([])
        setTotal(0)
      }}
        className="clearcartbtn noselectclearcart"
      >
        <span className="clearcarttext">Empty Cart</span>
        <span className="clearcarticon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </span>
      </button>
    </div>


    )
    output = (cart.map((item) => (
      <div className={`container ${blocktheme}`}>
        <div className="cartleftside">
          <div className="productimage">
            <img className="image" src={item.img} alt="" />
          </div>
        </div>
        <div className="cartmiddle">
          <b>{item.title}</b>
          <br />
          <br />${item.price}
        </div>
        <div className="cartrightside ">
          <div className="deletebtn">
            <button
              onClick={() => {
                setCart((current) =>
                  current.filter((product) => {
                    // 👇️ remove object that has id equal to 2
                    return product.cartid !== item.cartid;
                  })
                );
                //   console.log(cart);
                setTotal(total - item.price);
              }}
              className="delbutton noselect"
            >
              <span className="text">Delete</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="quantity">
            <button className={`quantitybutton ${btntheme}`}>-</button>
            <p className="number">{item.quantity}</p>
            <button onClick={() => {}} className={`quantitybutton ${btntheme}`}>
              +
            </button>
          </div>

          <br />
        </div>
      </div>
    )))
    checkout = (
      <div className={`total ${totalTheme}`}>
      <div className="containertotal">
        Total:${total}
        <button id="checkout" className={`button ${btntheme}`} onClick={()=>checkoutNavigate('/checkout-form')}>
          Checkout
        </button>
        
      </div>
    </div>
    )

  }

  return (
    <div>

{emptycart}

      {output}

      {checkout}
        </div>
  );
};

export default Cart;
