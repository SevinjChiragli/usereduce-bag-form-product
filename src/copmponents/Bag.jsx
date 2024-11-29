import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../App"
import BagItem from "./BagItem"

function Bag() {
  let { stateBag, dispatchBag } = useContext(MyContext)


  return (
    <PrudctSection>
      <ProductListUl>
        {stateBag.bag.map((item, index) => <BagItem key={index} product={item} />)}
      </ProductListUl>
      {/* <TotalPrice>{stateBag.totalSum}</TotalPrice> */}
      <TotalPrice>{stateBag.bag.reduce((total,price)=>total+price.totalPrice,0)}</TotalPrice>
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
  const TotalPrice = styled.p`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px 20px;
  padding: 30px;
  `