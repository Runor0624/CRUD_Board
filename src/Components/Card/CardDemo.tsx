import { Container, ImageDemo,Title,Text } from "style/Card";

// 이 파일은 사용자가 검색 전 보여주는 내용입니다.
const Sample = {
    Image: 'https://via.placeholder.com/160',
    Title: 'Demo',
    Text : 'Text'
}

function CardDemo() {
    return (
        <Container>
            <ImageDemo src={Sample.Image} alt="Demo이미지" />
            <Title>{Sample.Title}</Title>
            <Text>{Sample.Text}</Text>
        </Container>
    )
}
export default CardDemo