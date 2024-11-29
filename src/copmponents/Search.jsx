import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../App"

function Search() {
  let {stateProducts, dispatchProducts} = useContext(MyContext)

    return (
      <SearchSection>
        <SearchHeader>SEARCH BY NAME</SearchHeader>
        <SearchInput onInput={(ev) => dispatchProducts({type:'SEARCH VALUE', payload: ev.target.value})} type="text" placeholder="SEARCH BY NAME"/>
      </SearchSection>
    )
  }
  
  export default Search

  const SearchSection = styled.section`
  color:black;
  margin-top:40px;
  `

  const SearchHeader = styled.h2`
  font-size:30px;
  font-weight:900;
  text-align:center;
  `

  const SearchInput = styled.input`
  font-size:30px;
  font-weight:900;
  text-align:center;
  margin:auto;
  display:block;
  margin-top:20px;
  `