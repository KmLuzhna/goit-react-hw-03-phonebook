import styled from "styled-components";
export const Form = styled.form`
   border: 1px solid #d3d3d3;
   padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: max-content;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
`
export const InputForm = styled.input`
    display: block;
    border: none;
    border-radius: 20px;
    padding: 5px 8px;
    color: #333;
    box-shadow: 
        inset 0 -2px 0 rgba(0,0,0,.2), 
        0 0 4px rgba(0,0,0,0.1);
    font-size: 15px;
    padding: 10px 20px;
    margin-top: 10px;
`
export const ButtonAdd = styled.button`
  border-radius: 20px;
  border: none;
  margin: 10px 10px;
  padding: 5px 10px;
  font-size: 15px;
  text-align: center;
  color: #524f4e;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);

  :hover {
  background: #cccaca;
  box-shadow: 0 15px 20px #f3f2f5;
}
`