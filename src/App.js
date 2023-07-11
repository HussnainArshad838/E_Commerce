import React,{useEffect, useState, useContext} from 'react'
import Appx from './Appx.js'
import './App.css'
import {Themecontext} from './Context/Themecontext';
import {Cartcontext} from './Context/Cartcontext';
import {Formcontext} from './Context/Formcontext.js';
  
const App = () => {

  return (
    <div>
      <Formcontext>
      <Cartcontext>
      <Themecontext>
      <Appx />


    </Themecontext>
      </Cartcontext>
      </Formcontext>
    </div>
  )
}

export default App
