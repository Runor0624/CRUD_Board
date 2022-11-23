import axios from "axios";
import React, { useState, useCallback } from "react";
import styled from "styled-components"

function PostAddModal () {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [subDescription, setSubDescription] = useState('')
    const [price, setPrice] = useState('')

    const onChangeTitle = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    },[])

    const onChangeDescription = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    },[])

    const onChangeSubDescription = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setSubDescription(e.target.value)
    },[])

    const onChnagePrice = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    },[])

    const onSubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        axios.post(`http://localhost:8001/post`, {
            headers: {
                "Content-Type": "application/json"
            },
            title,
            price,
            description,
            subDescription
        })
        .then((res) => {
            alert('작성완료!')
            window.location.replace(`/`)
        })
        .catch((error) => {
            console.error(error)
            alert('작성 실패')
        })
    },[title,price,description,subDescription])

    return (
<Container>
    <Label>제목</Label>
    <Input name='title' type='text' onChange={onChangeTitle} tabIndex={1} />
    
    <Label>설명</Label>
    <Input name='description' type='text' onChange={onChangeDescription} tabIndex={2}/>
    
    <Label>추가 설명</Label>
    <Input name='subDescription' type='text' onChange={onChangeSubDescription} tabIndex={3} />
    
    <Label>가격</Label>
    <Input name='price' type='number' onChange={onChnagePrice} tabIndex={4}/>
    <Button type="submit" onClick={onSubmit}>게시</Button>
</Container>
    )
}

const Container = styled.div`
width: 400px;
height: 50vh;
border: 1px solid #dbdbdb;
border-radius: 5px;
background-color: white;
display: flex;
flex-direction: column;
position: fixed;
top: 25%;
left: 35%;
z-index: 99999;
`;

const Label = styled.label`
padding-left: 30px;
padding-top: 10px;
font-size: 18px;
font-weight: bold;
`;

const Input = styled.input`
width: 350px;
height: 30px;
border-radius: 5px;
align-self: center;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 10px;
`;

const Button = styled.button`
width: 300px;
height: 20px;
align-self: center;
font-weight: bold;
font-size: 17px;
border: none;
background-color: initial;
margin-top: 10px;
`;
export default PostAddModal