import styled from "styled-components";

export const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Container = styled.div`
border: 1px solid #dbdbdb;
border-radius: 5px;
margin-top: 7px;
margin-left: 40px;
width: 400px;
height: 450px;

@media screen and (max-width: 768px) {
    width: 350px;
    height: 360px;
  }
`;

export const Image = styled.img`
width: 380px;
padding-left: 10px;
padding-top: 10px;
object-fit: fill;

@media screen and (max-width: 768px) {
    width: 340px;
    height: 200px;
  }
`;

export const ImageDemo = styled.img`
display: block;
width: 380px;
padding-left: 10px;
padding-top: 10px;
object-fit: fill;
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

@media screen and (max-width: 768px) {
    padding-top: 8px;
  }
`;

export const SearchInput = styled.input`
width: 900px;
height: 30px;
border: 1px solid #dbdbdb;
border-radius: 5px;
margin: 5px 0 0 35px;

@media screen and (max-width: 768px) {
    width: 97%;
    padding-left: 18px;
  }
`;