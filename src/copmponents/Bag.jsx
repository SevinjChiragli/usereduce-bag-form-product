import styled from "styled-components"
import ProductItem from "./ProductItem"
import { useContext } from "react"
import { MyContext } from "../App"
import BagItem from "./BagItem"

function Bag() {
  let { state, dispatch } = useContext(MyContext)


  return (
    <PrudctSection>
      <ProductListUl>
        {state.bag.map((item, index) => <BagItem key={index} product={item} />)}
      </ProductListUl>
    </PrudctSection>
  )
}

export default Bag
const PrudctSection = styled.section`
  color:black;
  margin-top:40px;
  `

const ProductListUl = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px 20px;
  padding: 30px;
  `
