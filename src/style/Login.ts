// src/Page/Login.tsx에서 사용합니다
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid #dbdbdb;
border-radius: 5px;
margin: auto;
margin-top: 15vh;
width: 350px;
height: 450px;
`;

export const Title = styled.h1`
font-size: 40px;
font-weight: bold;
text-align: center;
padding-bottom: 10px;
`;

export const LoginInfoText = styled.p`
padding-top: 10px;
padding-bottom: 15px;
font-size: 13px;
color: red;
font-weight: bold;
text-align: center;
`;

export const LoginInfoBox = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 20px;
`;

export const Label = styled.label`
font-size: 15px;
font-weight: bold;
padding-top: 30px;
padding-left: 50px;
padding-bottom: 10px;
padding-right: 20px;
`;

export const Input = styled.input`
width: 250px;
height: 30px;
align-self: center;
border-radius: 5px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #dbdbdb;
border-bottom-style: dashed;
`;

export const LoginButton = styled.button`
width: 300px;
height: 40px;
text-align: center;
align-self: center;
cursor: pointer;
border: none;
border-radius: 5px;
color: white;
background-color: #0095f6;
font-weight: bold;

&:disabled {
    background-color: #0095f6;
    opacity: 0.5;
}
`;

export const SignUpText = styled.p`
padding-top: 40px;
font-size: 14px;
font-weight: bold;
text-align: center;
color: #dbdbdb;
cursor: pointer;
`;
