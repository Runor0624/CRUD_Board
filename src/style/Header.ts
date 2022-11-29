import styled from "styled-components";

export const Container = styled.header`
display: flex;
flex-direction: row;
max-width: 2560px;
width: 100%;
height: 40px;
border-bottom: 1px solid #dbdbdb;
background-color: white;
position: fixed;
top: 0px;
@media screen and (max-width: 768px) {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.h1`
padding-left: 35px;
padding-top: 10px;
font-size: 20px;
font-weight: bold;
cursor: pointer;
@media screen and (max-width: 768px) {
    align-self: center;
    padding-bottom: 20px;
  }
`;

export const RightBox = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
width: 80%;
z-index: 99999;
`;

export const Text = styled.p`
font-size: 15px;
font-weight: bold;
cursor: pointer;
padding-top: 10px;
padding-right: 10px;
@media screen and (max-width: 768px) {
    align-self: center;
    text-align: center;
    position: fixed;
    top: 32px;
    left: 320px;
  }
`;