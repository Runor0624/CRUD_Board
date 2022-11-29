import { useNavigate } from "react-router-dom";
import { Container, Logo, RightBox, Text } from "style/Header";
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
export default Header