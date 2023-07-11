import React, { useState } from 'react'
const ThemeContext1 = React.createContext()

export const Themecontext = (props) => {
    const [theme, setTheme] = useState('light')

  return (
    <div>
        <ThemeContext1.Provider value={{theme, setTheme}}>
                {props.children}
        </ThemeContext1.Provider>

        {/* <App theme={theme} /> */}

    </div>
  )
}

export default ThemeContext1