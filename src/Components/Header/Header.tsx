import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

function Header() {
    const navigate = useNavigate()

    const goToMain = () => {
        navigate('/')
    }

    const goToLogin = () => {
        navigate('/login')
    }

    const handleLogOut = () => {
        window.localStorage.clear()
        Swal.fire({
            title: '로그아웃에 성공했어요!',
        timer: 3000
        })
        goToLogin()
    }

    return (
        <Container>
            <Logo onClick={goToMain}>Header</Logo>

            <RightBox>
                {localStorage.length >= 1 ? <Text onClick={handleLogOut}>로그아웃</Text> :
                <Text onClick={goToLogin}>로그인</Text>}
            </RightBox>
        </Container>
    )
}

const Container = styled.header`
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

const Logo = styled.h1`
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

const RightBox = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
width: 80%;
z-index: 99999;
`;

const Text = styled.p`
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

export default Header