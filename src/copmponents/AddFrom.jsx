import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../App"

function AddForm() {
    let {state, dispatch} = useContext(MyContext)
    
    return (
        <FormSection>
            <FormHeader>SEARCH BY NAME</FormHeader>
            <FormTag onSubmit={(ev) => dispatch({type:'ADD DATA', payload: ev})}>
                <FormInput type="text" name="product_name" placeholder="product_name" />
                <FormInput type="text" name="product_description"   placeholder="product_description" />
                <FormInput type="text" name="product_price" placeholder="product_price" />
                <FormInput type="text" name="url" placeholder="url" />
                <FormButton>ADD</FormButton>
            </FormTag>
        </FormSection>
    )
}

export default AddForm

const FormSection = styled.section`
  color:black;
  margin-top:40px;
  `

const FormHeader = styled.h2`
  font-size:30px;
  font-weight:900;
  text-align:center;
  `

const FormTag = styled.form`
margin:auto;
margin-top:20px;
width:fit-content;
  `

const FormInput = styled.input`

  `

const FormButton = styled.button`

  `