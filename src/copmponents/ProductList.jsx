import styled from "styled-components"
import ProductItem from "./ProductItem"
import { useContext } from "react"
import { MyContext } from "../App"

function ProductList() {
  let { stateProducts, dispatchProducts } = useContext(MyContext)

  const productsArray = stateProducts.products.filter((item) => item.product_name.startsWith(stateProducts.searchValue))

  return (
    <PrudctSection>
      <ProductListUl>
        {productsArray.map((item, index) => <ProductItem key={index} product={item} />)}
      </ProductListUl>
    </PrudctSection>
  )
}

export default ProductList

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
