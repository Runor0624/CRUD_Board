import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorImage = require('../Image/ErrorImage.png')

function Error() {
    const navigate = useNavigate()

    return (
        <Container>
            <Image src={ErrorImage} alt="에러페이지 용 이미지" />
            <ErrorTitle>에러!</ErrorTitle>
            <ErrorText>잘못된 페이지에 접근했습니다 뒤로가기를 클릭해서 이전 페이지로 돌아가세요</ErrorText>
            <Button onClick={() => navigate(-1)}>뒤로가기</Button>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: 400px;
margin: auto;
margin-top: 20vh;
border: 1px solid #dbdbdb;
border-radius: 5px;
`;

const ErrorTitle = styled.h2`
align-self: center;
font-weight: bold;
font-size: 30px;
color: red;
padding-top: 20px;
padding-bottom: 20px;
`;

const ErrorText = styled.p`
text-align: center;
padding-top: 20px;
padding-bottom: 20px;
`;

const Button = styled.button`
border: none;
background-color: inherit;
align-self: center;
width: 300px;
height: 40px;
font-size: 25px;
font-weight: bold;
`;

const Image = styled.img`
padding-top: 20px;
width: 450px;
height: 200px;
align-self: center;
`;
export default Error 