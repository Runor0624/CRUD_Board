import { useNavigate } from 'react-router-dom';
import { Container, Image, ErrorTitle, Button } from 'style/Error';

const ErrorImage = require('../Image/ErrorImage.png');

export default function Error() {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={ErrorImage} alt="에러페이지 용 이미지" />
      <ErrorTitle>에러!</ErrorTitle>
      <Button onClick={() => navigate(-1)}>뒤로가기</Button>
    </Container>
  );
}
