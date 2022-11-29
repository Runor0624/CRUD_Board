import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: 400px;
margin: auto;
margin-top: 20vh;
border: 1px solid #dbdbdb;
border-radius: 5px;
`;

export const ErrorTitle = styled.h2`
align-self: center;
font-weight: bold;
font-size: 30px;
color: red;
padding-top: 20px;
padding-bottom: 20px;
`;

export const ErrorText = styled.p`
text-align: center;
padding-top: 20px;
padding-bottom: 20px;
`;

export const Button = styled.button`
border: none;
border-radius: 5px;
background-color: red;
color: yellow;
align-self: center;
width: 300px;
height: 40px;
font-size: 25px;
font-weight: bold;
`;

export const Image = styled.img`
padding-top: 20px;
width: 450px;
height: 200px;
align-self: center;
`;