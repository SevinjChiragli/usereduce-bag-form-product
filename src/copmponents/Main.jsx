import styled from "styled-components";
import Search from "./Search";
import ProductList from "./ProductList";
import AddForm from "./AddFrom";
import Bag from "./Bag";

function Main() {
  return (
    <MainTag>
      <Search />
      <AddForm />
      <ProductList />
      <Bag />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
