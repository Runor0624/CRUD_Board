// src/Page/SignUp.tsx 에서 사용합니다

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10vh;
  width: 400px;
  height: 450px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    margin-top: 20vh;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    padding-left: 25px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 25px;
  border-radius: 5px;
  align-self: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  align-self: center;
  margin-top: 20px;
  background-color: inherit;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoginText = styled.p`
  text-align: center;
  color: #dbdbdb;
  font-weight: bold;
  font-size: 14px;
  padding-top: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding-top: 25px;
  }
`;
