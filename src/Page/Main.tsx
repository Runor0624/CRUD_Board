import Card from "Components/Card/Card";
import PostAddModal from "Components/Modal/PostAddModal";
import Slick from "Components/Slick/Slick";
import { useState } from "react";
import styled from "styled-components";

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalChange = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <Container>
            <Slick />
            <Card />
            <Button onClick={handleModalChange}>글 쓰기</Button>
            {isModalOpen === true ? <PostAddModal /> : <></>}
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
max-height: 1080px;
`;

const Button = styled.button`
border: none;
border-radius: 5px;
width: 70px;
height: 50px;
font-size: 16px;
font-weight: bold;
position: fixed;
bottom: 50px;
right: 10px;

@media screen and (max-width: 768px) {
    right: 35px;
  }
`;
export default Main 