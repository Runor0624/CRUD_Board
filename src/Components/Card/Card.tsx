import { faker } from "@faker-js/faker"
import axios from "axios"
import React, { useState, useEffect } from "react"
import {  useNavigate } from "react-router-dom"
import {AiOutlineDelete} from 'react-icons/ai'
import { Container,MainContainer,Image,Title,Text,SearchInput } from "style/Card"

interface ITypes {
    id: number;
    title: string;
    subDescription: string;
    description: string;
    price: string;
}

function Card() {
    const navigate = useNavigate()

    const [data, setData] = useState<ITypes[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:8001/post')
            setData(res.data)
          }
          fetchData()
    } , [])

    const [search, setSearch] = useState("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }

    const onReset = (e:React.MouseEvent) => {
      setSearch("")
    }

    const TitleFilter = data.filter((PostFilteringData) => {
      return (
        PostFilteringData.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    })
    
    return (
<>

<SearchInput placeholder="검색어를 입력하세요" value={search} onChange={onChange} />
<AiOutlineDelete onClick={onReset} style={{fontSize: '15px', cursor:'pointer', position:'absolute', top:'355px', right:'520px'}} />

<MainContainer>
{search.length > 1 ? TitleFilter.map(data => (
  <Container key={data.id} onClick={() => navigate(`/${data.title}`)}>
    <Image src={faker.image.city()} alt="Cards" />
    <Title>{data.title}</Title>
    <Text>{data.description}</Text>
    <Text>{data.subDescription}</Text>
    <Text>가격 : {[data.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
  </Container>
)):<></>}

{search.length === 0 ? data.map((datas:ITypes) => {
        return (
          <Container key={datas.id} onClick={() => navigate(`/${datas.title}`)}>
            <Image src={faker.image.city()} alt="Card" />
            <Title>{datas.title}</Title>
            <Text>{datas.description}</Text>
            <Text>{datas.subDescription}</Text>
            <Text>가격 : {[datas.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
          </Container>
        )
      }):<></>}
      </MainContainer>
</>
    )
}
export default Card 