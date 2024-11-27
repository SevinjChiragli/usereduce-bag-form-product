import { createContext, useState, useRef, useReducer } from 'react'
import Footer from './copmponents/Footer'
import Header from './copmponents/Header'
import Main from './copmponents/Main'
import { initialObject, reducer } from './copmponents/reducer'

export const MyContext = createContext()

function App() {

  let [state, dispatch] = useReducer(reducer, initialObject)

  return (
    <MyContext.Provider value={{state, dispatch}}>
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
