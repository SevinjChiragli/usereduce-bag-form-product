import { createContext, useReducer } from 'react'
import Footer from './copmponents/Footer'
import Header from './copmponents/Header'
import Main from './copmponents/Main'
import { initialObject as initialObjectProducts, reducer as reducerProducts } from './copmponents/reducers/reducerProducts'
import { initialObject as initialObjectBag, reducer as reducerBag } from './copmponents/reducers/reducerBag'
export const MyContext = createContext()

function App() {

  let [stateProducts, dispatchProducts] = useReducer(reducerProducts, initialObjectProducts)
  let [stateBag, dispatchBag] = useReducer(reducerBag, initialObjectBag)

  return (
    <MyContext.Provider value={{stateProducts, dispatchProducts, stateBag, dispatchBag}}>
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
