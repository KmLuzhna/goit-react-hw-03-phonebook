import styled from "styled-components";

export const NewContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`
export const ContactEl = styled.li`
     display: flex;
    font-size: 20px;
    justify-content: space-between;
`


export const ButtonDelete = styled.button`
  border-radius: 20px;
  border: none;
  margin: 10px 0px  10px 20px;
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