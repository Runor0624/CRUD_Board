import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <p>Footer</p>
        </Container>
    )
}

const Container = styled.footer`
max-width: 2560px;
width: 100%;
height: 40px;
border-top: 1px solid #dbdbdb; 
background-color: white;
display: flex;
flex-direction: column;
padding-top: 10px;
position: fixed;
bottom: 0px;

p {
    text-align: center;
}
`;
export default Footer