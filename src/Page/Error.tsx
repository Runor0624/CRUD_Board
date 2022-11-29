import { useNavigate } from "react-router-dom";
import { Container,Image, ErrorText, ErrorTitle, Button } from "style/Error";

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
export default Error 