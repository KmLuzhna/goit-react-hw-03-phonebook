import styled from "styled-components";

export const LabelFilter = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
`

export const InputFilter = styled.input`
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
    width: max-content;
`