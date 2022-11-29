import { faker } from "@faker-js/faker"
import axios from "axios"
import React, { useState, useEffect } from "react"
import {  useNavigate } from "react-router-dom"
import { Container,MainContainer,Image,Title,Text,SearchInput } from "style/Card"
import CardDemo from "./CardDemo"

interface ITypes {
    id: number;
    title: string;
    subDescription: string;
    description: string;
    price: string;
    Discount: string;
}

function Card() {
    const navigate = useNavigate()
    const [data, setData] = useState<ITypes[]>([])

    const [search, setSearch] = useState("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }

    const TitleFilter = data.filter((PostFilteringData) => {
      return (
        PostFilteringData.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    })

    const getDatas = async() => {
      const res = await axios.get(`${axios.defaults.baseURL}/post/search/query`, {
      params: {title: (search)}
      })
      setData(res.data)
    }

    useEffect(() => {
      getDatas()
    } , [data])
    
    return (
<>
<SearchInput placeholder="검색어를 입력하세요" value={search} onChange={onChange} />

<MainContainer>
{search.length > 1 ? TitleFilter.map(data => (
  <Container key={data.id} onClick={() => navigate(`/${data.title}`)}>
    <Image src={faker.image.city()} alt="Cards" />
    <Title>{data.title}</Title>
    <Text>{data.description}</Text>
    <Text>{data.subDescription}</Text>
    <Text>가격 : {[data.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
    <Text>회원가 : {[data.Discount].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
  </Container>
)): <CardDemo />}

      </MainContainer>
</>
    )
}
export default Card 