import styled from "styled-components";

export const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
`;

export const Container = styled.div`
border: 1px solid #dbdbdb;
border-radius: 5px;
margin-top: 7px;
margin-left: 40px;
width: 400px;
height: 380px;
`;

export const Image = styled.img`
width: 380px;
height: 200px;
padding-left: 10px;
padding-top: 10px;
`;

export const Title = styled.h1`
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
font-size: 20px;
font-weight: bold;
`;

export const Text = styled.p`
padding-top: 10px;
padding-left: 10px;
padding-bottom: 1px;
font-size: 15px;
`;

export const SearchInput = styled.input`
width: 900px;
height: 30px;
border: 1px solid #dbdbdb;
border-radius: 5px;
margin: 5px 0 0 35px;
`;