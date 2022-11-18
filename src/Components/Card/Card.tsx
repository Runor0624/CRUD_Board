import axios from "axios"
import { useState, useEffect } from "react"
import {  useNavigate } from "react-router-dom"
import styled from "styled-components"

interface ITypes {
    id: number;
    title: string;
    subDescription: string;
    description: string;
    price: string;
}

function Card() {
    const navigate = useNavigate()

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:8001/post')
            setData(res.data)
          }
          fetchData()
    } , [])

   

    return (
<>
{data.map((datas:ITypes) => {
        return (
          <Container key={datas.id} onClick={() => navigate(`/${datas.title}`)}>
              {datas.title}
            <p>{datas.price}</p>
            <p>{datas.id}</p>
          </Container>
        )
      })}
</>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #dbdbdb;
border-radius: 5px;
width: 400px;
height: 100px;
`;
export default Card 