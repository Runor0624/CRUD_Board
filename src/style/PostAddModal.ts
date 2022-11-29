import styled from "styled-components";

export const Container = styled.form`
width: 400px;
height: 60vh;
border: 1px solid #dbdbdb;
border-radius: 5px;
background-color: white;
display: flex;
flex-direction: column;
position: fixed;
top: 25%;
left: 35%;
z-index: 99999;

@media screen and (max-width: 768px) {
    position: fixed;
    left: 7%;
    height: 45vh;
  }
`;

export const Label = styled.label`
padding-left: 30px;
padding-top: 10px;
font-size: 18px;
font-weight: bold;
`;

export const Input = styled.input`
width: 350px;
height: 30px;
border-radius: 5px;
align-self: center;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 10px;
`;

export const Button = styled.button`
width: 300px;
height: 20px;
align-self: center;
font-weight: bold;
font-size: 17px;
border: none;
background-color: initial;
margin-top: 10px;
`;