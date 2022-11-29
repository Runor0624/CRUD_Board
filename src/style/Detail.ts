import styled from "styled-components";

export const Container = styled.form`
border: 1px solid #dbdbdb;
border-radius: 5px;
width: 800px;
max-height: 1080px;
height: 600px;
margin: auto;
margin-top: 25px;

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 630px;
  }
`;

export const Image = styled.img`
width: 780px;
object-fit: fill;
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
border-bottom: 1px solid #dbdbdb;
`;

export const Title = styled.h1`
font-size: 25px;
font-weight: bold;
padding-left: 10px;
padding-top: 5px;
padding-bottom: 5px;

@media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const PriceText = styled.p`
font-size: 16px;
color: #dbdbdb;
padding-left: 10px;

@media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

export const PriceBox = styled.div`
align-self: center;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;

button {
    border: none;
    background-color: initial;
    font-size: 14px;
    font-weight: bold;
}

input {
    border: none;
    text-align: center;
}
`;

export const Text = styled.p`
font-size: 18px;
padding-left: 10px;
padding-bottom: 5px;

@media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

export const ModifyContainer = styled.form`
display: flex;
flex-direction: column;
width: 600px;
height: 200px;
border: 1px solid #dbdbdb;
border-radius: 5px;
margin: auto;
margin-top: -200px;
z-index: 9999;

label {
    padding-top: 10px;
    padding-bottom: 10px;
}
`;

export const CommentInput = styled.input`
width: 650px;
height: 25px;
border-radius: 5px;
z-index: 999999;
@media screen and (max-width: 768px) {
    display: flex;
    width: 70%;
    margin-top: 50px;
  }
`;

export const CommentAddButton = styled.button`
width: 140px;
height: 25px;
padding-top: 42px;
padding-left: 10px;
border: none;
background-color: initial;
font-weight: bold;
z-index: 999999;

@media screen and (max-width: 768px) {
   width: 30%;
   margin-top: -95px;
   margin-left: 270px;
  }
`;

export const CommentTextTitle = styled.h3`
padding-left: 10px;
padding-top: 10px;
font-size: 13px;
font-weight: bold;
border-bottom: 1px solid #dbdbdb;
`;

export const CommentText = styled.p`
font-size: 13px;
padding-left: 10px;
padding-top: 10px;
`;

export const ButtonGroup = styled.div`
border: 1px solid #dbdbdb;
border-radius: 5px;

@media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 650px;
  }
`;