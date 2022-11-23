import styled from "styled-components";

export const Container = styled.div`
border: 1px solid #dbdbdb;
border-radius: 5px;
width: 800px;
max-height: 1080px;
height: 600px;
margin: auto;
margin-top: 45px;
`;

export const Image = styled.img`
width: 780px;
height: 300px;
padding-left: 10px;
padding-top: 40px;
padding-bottom: 10px;
border-bottom: 1px solid #dbdbdb;
`;

export const Title = styled.h1`
font-size: 25px;
font-weight: bold;
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
`;

export const PriceText = styled.p`
font-size: 16px;
color: #dbdbdb;
padding-left: 10px;
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
padding-bottom: 10px;
`;

export const ModifyContainer = styled.div`
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
`;

export const CommentAddButton = styled.button`
width: 140px;
height: 25px;
padding-top: 72px;
padding-left: 10px;
border: none;
background-color: initial;
font-weight: bold;
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