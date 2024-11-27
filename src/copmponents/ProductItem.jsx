import { useContext, useRef } from "react";
import styled from "styled-components";
import { MyContext } from "../App";

function ProductItem({ product }) {
  let { state, dispatch } = useContext(MyContext);

  let productName = useRef("");
  let productDescription = useRef("");
  let productPrice = useRef("");

  return (
    <ProductItemTag>
      <Name>{product.product_name}</Name>
      <Description>{product.product_description}</Description>
      <Price>{product.product_price}</Price>
      <Image src={product.url} alt={product.product_name} />
      <DeleteButton
        onClick={() => dispatch({ type: "DELETE DATA", payload: product.id })}
      >
        DELETE
      </DeleteButton>

      <AddButton onClick={()=>{
          dispatch({ type: "ADD TO BAG", payload: product });
      }}>ADD TO BAG</AddButton>
      
      <RedactButton
        onClick={() => {
          productName.current = product.product_name;
          productDescription.current = product.product_description;
          productPrice.current = product.product_price;

          dispatch({ type: "SHOW FORM", payload: product });
        }}
      >
        REDACT
      </RedactButton>
      {product.open && (
        <RedactForm
          onSubmit={(ev) =>
            dispatch({
              type: "CHANGE DATA",
              payload: { argument: ev, id: product.id },
            })
          }
        >
          <InputName
            type="text"
            placeholder="InputName"
            name="product_name"
            defaultValue={productName.current}
          />
          <InputDescription
            type="text"
            placeholder="InputDescription"
            name="product_description"
            defaultValue={productDescription.current}
          />
          <InputPrice
            type="number"
            placeholder="InputPrice"
            name="product_price"
            defaultValue={productPrice.current}
          />
          <FormButton>CHANGE</FormButton>
        </RedactForm>
      )}
    </ProductItemTag>
  );
}

export default ProductItem;

const ProductItemTag = styled.li`
  border-radius: 10px;
  padding: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.p``;

const Description = styled.p``;

const Price = styled.p``;

const Image = styled.img``;

const RedactButton = styled.button``;
const DeleteButton = styled.button``;
const AddButton = styled.button``;
const RedactForm = styled.form``;

const InputName = styled.input``;

const InputDescription = styled.input``;

const InputPrice = styled.input``;

const FormButton = styled.button``;
