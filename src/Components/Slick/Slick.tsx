import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const Image1 = require('../../Image/1231.png')
const Image2 = require('../../Image/이미지1.png')
const Image3 = require('../../Image/이미지 테스트1.png')
const Image4 = require('../../Image/이미지 테스트3.png')

const Slick = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider {...settings}>
                <Image src={Image1} alt="1" />
              
                <Image src={Image2} alt="2" />
              
                <Image src={Image3} alt="3" />
              <a href="https://www.google.co.kr">
                <Image src={Image4} alt="4" style={{height:'300px', width:'1400px'}}/>
                </a>
            </Slider>
        </div>
    )
}

const Image = styled.img`
padding-top: 60px;
padding-left: 40px;
padding-right: 40px;
width: 600px;
`;
export default Slick