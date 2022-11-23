import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
    const navigate = useNavigate()

    const goToMain = () => {
        navigate('/')
    }
    return (
        <Container>
            <Logo onClick={goToMain}>Header</Logo>
        </Container>
    )
}

const Container = styled.header`
max-width: 2560px;
width: 100%;
height: 40px;
border-bottom: 1px solid #dbdbdb;
background-color: white;
position: fixed;
top: 0px;
`;

const Logo = styled.h1`
padding-left: 10px;
padding-top: 10px;
font-size: 20px;
font-weight: bold;
cursor: pointer;
`;
export default Header