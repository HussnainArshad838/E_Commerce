import React, { useContext, useEffect, useState } from 'react'
import ThemeContext1 from "../Context/Themecontext";

import '../Style/Style.css'

  const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext1)

    const [text, setText] = useState('')

    useEffect(() => {
      if (theme=='light') {
        setText('Dark Mode')
      } else if(theme=='dark'){
        setText('Light Mode')
      }
    }, [theme])
    


    const ToggleTheme = () =>{
        if (theme=='light') {
        setTheme('dark')
        }else if(theme=='dark'){
            setTheme('light')
        }

        // console.log(theme);
    }

    return (
      <div>
          <button className='btndark button' onClick={ToggleTheme}>{text}</button>
      </div>
    )
  }
  
  export default ThemeToggle
  