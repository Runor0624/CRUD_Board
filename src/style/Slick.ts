import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
@media screen and (max-width: 768px) {
    margin-top: 65px;
  }
`;

export const Image = styled.img`
padding-left: 40px;
padding-right: 40px;
width: 600px;
object-fit: fill;

@media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`;